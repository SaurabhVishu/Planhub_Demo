import React from "react";
import { View, Image } from "react-native";
import Text from "components/TextWrapper";
import { styles } from "./ViewScheduleListStyle";
import Glyphs from "assets/Glyphs";

const ViewScheduleList = ({ item }) => {
  //  Profile Image Array

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <View style={[styles.mainContainer, { borderColor: item.color }]}>
        <View style={[styles.verticalLine, { backgroundColor: item.color }]} />
        <View>
          <Text h5 bold>
            {item.name}
          </Text>
          <Text h6>{item.details}</Text>
        </View>
        <View style={styles.ImageContainer}>
          {arr.map((item, index) => {
            return (
              <View key={index} style={{ left: index * -8 }}>
                {index <= 2 ? (
                  <Image source={Glyphs.USER_PROFILE} style={styles.userIcon} />
                ) : (
                  index === 3 && (
                    <View style={styles.profileView}>
                      <Text h6>+{arr.length}</Text>
                    </View>
                  )
                )}
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.sepratorLine} />
    </>
  );
};

export default ViewScheduleList;
