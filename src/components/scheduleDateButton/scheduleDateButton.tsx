import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Text from "components/TextWrapper";
import Glyphs from "assets/Glyphs";
import moment from "moment";
import { empScheduleJobListData } from "@shared-constants";
import ViewScheduleList from "views/viewSchedule/components/ViewscheduleList";

export interface ScheduleDateButtonData {
  Viewdata: any;
}

const ScheduleDateButton = (props: ScheduleDateButtonData) => {
  const now = moment();

  const [viewType, setViewType] = useState(props.Viewdata);

  const [currentDate, setCurrentDate] = useState(now);

  const [currentMonth, setCurrentMonth] = useState(now);
  const [currentData, setCurrentData] = useState([]);
  //   const [clicktype, setclickType] = useState(true);

  useEffect(() => {
    setViewType(props.Viewdata);
  }, [props.Viewdata]);

  //   TODO
  //   const daysInMonth = currentMonth.daysInMonth();

  //   let startDate = currentMonth.clone().startOf("month");

  //   const endDate = currentMonth.clone().endOf("month").add(1, "day");

  //   while (startDate.isBefore(endDate)) {
  //     const week = [];

  //     for (let i = 0; i < 7; i++) {
  //       if (startDate.isBefore(endDate)) {
  //         week.push({
  //           date: startDate.format("DD"),
  //           dayName: startDate.format("ddd"),
  //         });
  //         startDate = startDate.add(1, "day");
  //       }
  //     }

  //     weeksInMonth.push(week);
  //   }

  const daysOfWeek = [];
  for (let i = 0; i < 7; i++) {
    const currentDay = currentDate.clone().startOf("week").add(i, "days");
    daysOfWeek.push({
      id: i,
      weekNumber: currentDay.format("W"),
      date: currentDay,
    });
  }

  const weekNumberName = parseInt(daysOfWeek[0].date.format("DD")) / 7;

  const handlePreviousMonthClick = () => {
    setCurrentMonth(currentDate.clone().subtract(1, "month"));
    const newDate = currentDate.clone().subtract(1, "month").startOf("month");
    setCurrentDate(newDate);
    const result = empScheduleJobListData.filter(
      (item) =>
        moment(item.startdate) <= currentDate &&
        moment(item.endDate) >= currentDate,
    );
    setCurrentData(result);
  };

  const handleNextMonthClick = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
    const newDate = currentMonth.add(1, "month").startOf("month");
    setCurrentDate(newDate);
    const result = empScheduleJobListData.filter(
      (item) =>
        moment(item.startdate) <= currentDate &&
        moment(item.endDate) >= currentDate,
    );
    setCurrentData(result);
  };

  const handleNextDateClick = () => {
    setCurrentDate(currentDate.clone().add(1, "day"));
    setCurrentMonth(currentDate);

    const result = empScheduleJobListData.filter(
      (item) =>
        moment(item.startdate) <= currentDate &&
        moment(item.endDate) >= currentDate,
    );
    setCurrentData(result);
  };

  const handlePreviousDateClick = () => {
    setCurrentDate(currentDate.subtract(1, "day"));
    setCurrentMonth(currentDate);
    const result = empScheduleJobListData.filter(
      (item) =>
        moment(item.startdate) <= currentDate &&
        moment(item.endDate) >= currentDate,
    );
    setCurrentData(result);
  };

  const handleDateClick = (item: any, index: number) => {
    setCurrentDate(item.date);
    setCurrentMonth(item.date);
    console.log("current date is =====>", currentDate);
    setViewType("days");

    const result = empScheduleJobListData.filter(
      (item) =>
        moment(item.startdate) <= currentDate &&
        moment(item.endDate) >= currentDate,
    );
    setCurrentData(result);
  };
  const getNextWeek = () => {
    setCurrentDate(currentDate.clone().add(1, "week"));
    const result = empScheduleJobListData.filter(
      (item) =>
        moment(item.startdate) <= daysOfWeek[0].date &&
        moment(item.endDate) >= daysOfWeek[6].date,
    );
    setCurrentData(result);
  };

  const getPrevWeek = () => {
    console.log("haan clck hua hai ");
    setCurrentDate(currentDate.clone().subtract(1, "week"));
    const result = empScheduleJobListData.filter(
      (item) =>
        moment(item.startdate) <= daysOfWeek[0].date &&
        moment(item.endDate) >= daysOfWeek[6].date,
    );
    setCurrentData(result);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.calendarContainer}>
        <TouchableOpacity onPress={() => handlePreviousMonthClick()}>
          <Image source={Glyphs.LEFT_ARROW} style={styles.arrowIcon} />
        </TouchableOpacity>
        {viewType === "months" ? (
          <Text h5 bold>
            {currentDate.format("MMMM, YYYY")} (week {Math.ceil(weekNumberName)}
            )
          </Text>
        ) : (
          <Text h5 bold style={styles.monthName}>
            {currentMonth.format("MMMM,  YYYY")}
          </Text>
        )}
        <TouchableOpacity onPress={() => handleNextMonthClick()}>
          <Image source={Glyphs.RIGHT_ARROW} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
      {viewType === "days" && (
        <View style={styles.dateMainContainer}>
          <TouchableOpacity onPress={() => handlePreviousDateClick()}>
            <Image source={Glyphs.LEFT_ARROW} style={styles.arrowIcon} />
          </TouchableOpacity>
          <View style={styles.dateContainer}>
            <Text h6 bold>
              {currentDate.format("DD")}
            </Text>
            <Text h6 bold>
              {currentDate.format("ddd")}
            </Text>
          </View>
          <TouchableOpacity onPress={() => handleNextDateClick()}>
            <Image source={Glyphs.RIGHT_ARROW} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      )}

      {viewType === "months" && (
        <View style={styles.dateMainContainer}>
          <TouchableOpacity onPress={() => getPrevWeek()}>
            <Image source={Glyphs.LEFT_ARROW} style={styles.arrowIcon} />
          </TouchableOpacity>
          <View style={styles.weekDaysContainer}>
            {daysOfWeek.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.dayContainer}
                  key={index}
                  onPress={() => handleDateClick(item, index)}
                >
                  <Text h6 bold>
                    {item.date.format("DD")}
                  </Text>
                  <Text h6 bold>
                    {item.date.format("ddd")}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity onPress={() => getNextWeek()}>
            <Image source={Glyphs.RIGHT_ARROW} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.sepratorLine} />
      <View>
        {currentData.length !== 0 ? (
          <FlatList
            data={currentData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => ViewScheduleList(item)}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text h2 bold style={styles.noJobText}>
            Not job assign
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  calendarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
  },
  dateMainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 8,

    alignItems: "center",
  },
  arrowIcon: {
    height: 13,
    width: 13,
    resizeMode: "contain",
    marginHorizontal: 15,
  },
  monthName: {
    width: 123,
  },
  dateContainer: {
    backgroundColor: "#F4F5F5",
    paddingHorizontal: 12,
    paddingVertical: 4,
    height: 36,
    width: 305,
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#7C838B",
    borderWidth: 0.5,
  },
  sepratorLine: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#D3D6D8",
  },
  noJobText: {
    marginTop: 30,
    textAlign: "center",
  },
  dayContainer: {
    backgroundColor: "#F4F5F5",
    height: 36,
    width: 36,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#7C838B",
    justifyContent: "center",
    alignItems: "center",
  },
  weekDaysContainer: {
    flexDirection: "row",
    width: 305,

    justifyContent: "space-between",
  },
});
export default ScheduleDateButton;
