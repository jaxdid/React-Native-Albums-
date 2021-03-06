import React from 'react'
import { Image, Linking, Text, View } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({ album }) => {
  const { artist, thumbnail_image, image, title, url } = album

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            source={{ uri: thumbnail_image }}
            style={styles.thumbnailStyle}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          source={{ uri: image }}
          style={styles.imageStyle}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => { Linking.openURL(url) }}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    width: null,
    height: 300,
    flex: 1
  }
}

export default AlbumDetail
