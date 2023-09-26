import React, { useState } from "react";
import { SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./ViewScheduleStyle";
import Glyphs from "assets/Glyphs";
import Text from "components/TextWrapper";
import ScheduleDateButton from "components/scheduleDateButton/scheduleDateButton";

interface ViewScheduleScreenProps {}

const ViewSchedule: React.FC<ViewScheduleScreenProps> = () => {
  const days = "days";
  const months = "months";

  const [value, setValue] = useState(days);

  const handleDayButton = () => {
    setValue(days);
  };
  const handleWeekButton = () => {
    setValue(months);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.searchContainer}>
          <Text h4 bold>
            View Schedule
          </Text>
          <TouchableOpacity>
            <Image source={Glyphs.Search} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.groupBtnContainer}>
          <TouchableOpacity
            style={styles.btnConatiner}
            onPress={() => handleDayButton()}
          >
            <Text h4 bold>
              day
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnConatiner}
            onPress={() => handleWeekButton()}
          >
            <Text h4 bold>
              week
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnConatiner}>
            <Text h4 bold>
              months
            </Text>
          </TouchableOpacity>
        </View>
        {/* Job schedule Button Component call */}

        <ScheduleDateButton Viewdata={value} />
      </View>
    </SafeAreaView>
  );
};
export default ViewSchedule;
