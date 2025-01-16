import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { categories, shortVideos, videos } from '../constants';
import ShortVideoCard from '../components/shortVideoCard';
import VideoCard from '../components/videoCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 6,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 28,
    width: 40,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 4,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginRight: 12,
  },
  avatar: {
    height: 28,
    width: 28,
    borderRadius: 14,
  },
  categoriesContainer: {
    paddingVertical: 16,
  },
  categoriesScroll: {
    paddingHorizontal: 16,
  },
  categoryButton: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 1,
  },
  categoryText: {
    fontSize: 14,
    marginTop: 2,
  },
  activeCategory: {
    backgroundColor: 'white',
    borderColor: 'white',
  },
  inactiveCategory: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'rgba(255,255,255,0.3)',
  },
  activeText: {
    color: 'black',
  },
  inactiveText: {
    color: 'white',
  },
  shortsContainer: {
    marginTop: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  shortsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  shortsIcon: {
    height: 24,
    width: 20,
    marginRight: 8,
  },
  shortsText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  shortsScroll: {
    paddingHorizontal: 16,
  },
  videosContainer: {
    
    marginTop: 16,
  },
});

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <View style={styles.headerTitle}>
          <Image source={require('../assets/icons/youtubeIcon.png')} style={styles.logo} />
          <Text style={styles.headerText}>YouTube</Text>
        </View>
        <View style={styles.headerIcons}>
          <Icon.Cast stroke="white" strokeWidth={1.2} height={22} style={styles.headerIcon} />
          <Icon.Bell stroke="white" strokeWidth={1.2} height={22} style={styles.headerIcon} />
          <Icon.Search stroke="white" strokeWidth={1.2} height={22} style={styles.headerIcon} />
          <Image source={require('../assets/images/avatar.png')} style={styles.avatar} />
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.categoriesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesScroll}>
            <TouchableOpacity style={[styles.categoryButton, styles.inactiveCategory]}>
              <Icon.Menu stroke="white" strokeWidth={1.2} height={22} />
            </TouchableOpacity>
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <TouchableOpacity
                  key={category}
                  onPress={() => setActiveCategory(category)}
                  style={[
                    styles.categoryButton,
                    isActive ? styles.activeCategory : styles.inactiveCategory,
                  ]}
                >
                  <Text style={[styles.categoryText, isActive ? styles.activeText : styles.inactiveText]}>
                    {category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.shortsContainer}>
          <View style={styles.shortsHeader}>
            <Image source={require('../assets/icons/shortsIcon.png')} style={styles.shortsIcon} />
            <Text style={styles.shortsText}>Shorts</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.shortsScroll}>
            {shortVideos.map((item, index) => (
              <ShortVideoCard key={index} item={item} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.videosContainer}>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}