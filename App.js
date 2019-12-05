import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput
} from "react-native";
const imgsrc = require("./ticket_shape.png");
const windowWidth = Dimensions.get("window").width;
//const windowHeight = Dimensions.get("window").height;

export default class BackgroundImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={imgsrc}
          style={{ width: windowWidth * 0.94, height: "99%" }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  marginTop: 20,
                  alignItems: "flex-start",
                  marginRight: 90
                }}
              >
                <View>
                  <Text>CREATED ON</Text>
                  <Text>26 NOV 2019</Text>
                </View>
                <View
                  style={{
                    marginTop: 20
                  }}
                >
                  <Text>EXPECTED CLOSING DATE</Text>
                  <Text>28 NOV 2019</Text>
                </View>
              </View>
              <View>
                <View>
                  <Text>STATUS</Text>
                  <Text>Resolving</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginTop: 20,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginLeft: 50
              }}
            >
              <View
                style={{
                  marginTop: 30,
                  // marginRight: 50
                }}
              >
                <Text>Ticket Id</Text>
                <Text>123456</Text>
              </View>
              <View>
                <Text>Description</Text>
                <View
                  style={{
                    marginTop: 30,
                    // marginRight: 50
                  }}
                >
                  <TextInput
                    multiline
                    numberOfLines={11}
                    onChangeText={value => this.setState({ text: value })}
                    value={this.state.text}

                    // maxLength={40}
                  />
                </View>
              </View>
              <View
                style={{
                  marginTop: 30,
                  flexDirection: "row"
                }}
              >
                <Text>Agent :</Text>
                <Text>Ravi Kumar</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  }
});
