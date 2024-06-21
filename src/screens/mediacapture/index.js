import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, SIZES} from '../../constans';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';
import ButtonCustom from '../../components/bttton';
import LogoutModal from '../../components/logOutModal';

const Mediacapture = ({navigation}) => {
  const [picImage, setPicImage] = useState([]);
  const [picVideo, setPicVideo] = useState([]);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [visible, setVisible] = useState(false);

  const removeImage = index => {
    setPicImage(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const removeVideo = index => {
    setPicVideo(prevVideos => prevVideos.filter((_, i) => i !== index));
  };

  const selectVideo = () => {
    ImagePicker.openCamera({
      mediaType: 'video',
      compressVideoPreset: 'MediumQuality',
    })
      .then(video => {
        console.log(video);
        setPicVideo(prevVideos => [
          ...prevVideos,
          {uri: video.path, name: video.filename, type: video.mime},
        ]);
      })
      .catch(error => {
        console.log('Error picking video: ', error);
      });
  };

  const chooseImage = () => {
    ImagePicker.openCamera({
      width: 600,
      height: 600,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setPicImage(prevImages => [
          ...prevImages,
          {uri: image.path, name: image.filename, type: image.mime},
        ]);
      })
      .catch(error => {
        console.log('Error picking image: ', error);
      });
  };
  const imageModalToggle = image => {
    setShowImageModal(!showImageModal);
    setImageUrl(image);
  };

  const videoModalToggle = video => {
    setShowVideoModal(!showVideoModal);
    setVideoUrl(video);
  };


  return (
    <View style={styles.container}>
      <ScrollView style={styles.innercontainer}>
        <Text style={styles.leftText}>Photo & Video</Text>

        <View style={[styles.rowwrap]}>
          <TouchableOpacity
            style={[styles.photobox, {marginTop: SIZES.height * 0.07}]}
            onPress={chooseImage}>
            <AntDesign name="camera" size={30} color={COLORS.black} />
            <Text style={styles.cameratext}>Add Photo</Text>
          </TouchableOpacity>

          {picImage?.map((image, index) => (
            <View
              key={index}
              style={[styles.photobox, {borderWidth: 0, borderRadius: 10}]}>
              <Image source={{uri: image.uri}} style={styles.photo} />
              <TouchableOpacity
                style={styles.crossMainContaint}
                onPress={() => removeImage(index)}>
                <Entypo name="cross" size={20} color={COLORS.black} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={[styles.rowwrap]}>
          <TouchableOpacity style={styles.photobox} onPress={selectVideo}>
            <Entypo name="video-camera" size={30} color={COLORS.black} />
            <Text style={styles.cameratext}>Add Video</Text>
          </TouchableOpacity>

          {picVideo?.map((video, index) => (
            <View
              key={index}
              style={[styles.photobox, {borderWidth: 0, borderRadius: 10}]}>
              <TouchableOpacity onPress={() => videoModalToggle(video.uri)}>
                <Video
                  source={{uri: video.uri}}
                  style={styles.photo}
                  paused={true}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.crossMainContaint}
                onPress={() => removeVideo(index)}>
                <Entypo name="cross" size={20} color={COLORS.black} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* image modal ..................*/}

        <Modal
          transparent={true}
          animationType="fade"
          visible={showImageModal}
          onRequestClose={() => imageModalToggle(null)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {imageUrl && (
                <Image source={{uri: imageUrl}} style={styles.photo} />
              )}
            </View>
          </View>
        </Modal>

        {/* video modal ..............*/}

        <Modal
          transparent={true}
          animationType="fade"
          visible={showVideoModal}
          onRequestClose={() => videoModalToggle(null)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {videoUrl && (
                <Video
                  source={{uri: videoUrl}}
                  style={styles.backgroundVideo}
                  controls={true}
                  paused={!isPlaying}
                  resizeMode="contain"
                />
              )}
              <TouchableOpacity
                style={styles.crossMainContaint}
                onPress={() => videoModalToggle(null)}>
                <Entypo name="cross" size={20} color={COLORS.black} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>


        <ButtonCustom children="Log Out " onPress={() => setVisible(true)} />

        <LogoutModal
          visible={visible}
          onChangeVisible={val => setVisible(val)}
        />
      </ScrollView>
    </View>
  );
};

export default Mediacapture;
