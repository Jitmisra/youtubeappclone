import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import * as Icon from "react-native-feather";

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 256, // h-64 (64 * 4 = 256)
    width: 160,  // w-40 (40 * 4 = 160)
    marginRight: 12, // mr-3 (3 * 4 = 12)
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 8, // rounded-xl
    position: 'absolute',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 12, // pt-3
    paddingRight: 4, // pr-1
  },
  textContainer: {
    padding: 8, // p-2
  },
  title: {
    color: 'white',
    textShadowColor: 'black', // shadow-lg (simplified shadow)
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    fontWeight: 'bold',
    fontSize: 14, // text-sm
  },
  viewCount: {
    color: 'white',
    textShadowColor: 'black', // shadow-md (simplified shadow)
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    fontWeight: '800', // font-extrabold (approximately)
    fontSize: 12, // text-xs
  },
});

export default function ShortVideoCard({item}) {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.iconContainer}>
        <Icon.MoreVertical stroke={"white"} strokeWidth={1.4} height={20} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.viewCount}>
          {item.viewCount} views
        </Text>
      </View>
    </View>
  );
}