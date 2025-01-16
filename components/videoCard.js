import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import * as Icon from "react-native-feather";
import { formatViews } from '../utils/numbers';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  thumbnail: {
    height: 200,
    
   
    marginRight: 10,
    width: '100%', // Added width for better responsiveness
    resizeMode: 'cover', // Ensures the image covers the entire area
  },
  durationContainer: {
    backgroundColor: 'black',
    borderRadius: 3,
    paddingHorizontal: 2,
    position: 'absolute', // Positioned over the thumbnail
    bottom: 10,
    right: 25,
  },
  durationText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items to the top
    paddingVertical: 5,
    marginHorizontal: 15,
  },
  channelImage: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    flexShrink: 1, // Prevents text from overflowing
  },
  channelInfo: {
    color: '#c0c0c0',
    fontSize: 12,
    marginTop: 3,
  },
});

export default function VideoCard({ video }) {

  const thumbnailUrl = video.thumbnail[0].url;
  const channelThumbnailUrl = video.channelThumbnail[0].url;

  return (
    <View style={styles.container}>
      <Pressable>
        <Image source={thumbnailUrl} style={styles.thumbnail} />
        <View style={styles.durationContainer}>
          <Text style={styles.durationText}>{video.lengthText}</Text>
        </View>
      </Pressable>
      <View style={styles.infoContainer}>
        <Image source={channelThumbnailUrl} style={styles.channelImage} />
        <View style={{ flex: 1, marginLeft: 8 }}>
          <Text style={styles.title} numberOfLines={2}>
            {video.title}
          </Text>
          <Text style={styles.channelInfo}>
            {video.channelTitle} • {formatViews(video.viewCount)} views • {video.publishedText}
          </Text>
        </View>
        <View style={{marginTop: 5}}>
          <Icon.MoreVertical color="white" strokeWidth={2} height={15} />
        </View>
      </View>
    </View>
  );
}