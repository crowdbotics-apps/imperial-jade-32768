import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_21_163} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86ae/f4e6/287fe3eb89dd69115761aba5059f6055"
        }}
        style={styles.ImageBackground_57_125}
      />
      <View style={styles.View_4_66}>
        <Text style={styles.Text_4_66}>Food cam</Text>
      </View>
      <View style={styles.View_4_68}>
        <Text style={styles.Text_4_68}>
          Share your photo here and get featured!
        </Text>
      </View>
      <View style={styles.View_21_144}>
        <View style={styles.View_21_145}>
          <View style={styles.View_21_146}>
            <View style={styles.View_21_147} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4903/5b8d/8b494ed76c0b76253af621d9ae3d3539"
              }}
              style={styles.ImageBackground_21_148}
            />
            <View style={styles.View_21_149} />
          </View>
          <View style={styles.View_21_150}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e54/9553/422bd996e722f69fc1d5accbd3534d29"
              }}
              style={styles.ImageBackground_21_151}
            />
          </View>
          <View style={styles.View_21_155}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5b1/4af2/a5e6c0f60c15cfdeb166a41da89658a9"
              }}
              style={styles.ImageBackground_21_156}
            />
          </View>
        </View>
        <View style={styles.View_21_161}>
          <View style={styles.View_21_162}>
            <Text style={styles.Text_21_162}>9:27</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9103/8714/c71454e8ca4f265a6586ae40de517d59"
        }}
        style={styles.ImageBackground_57_124}
      />
      <View style={styles.View_58_312}>
        <View style={styles.View_58_313} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ced/6332/e703507a96e275fb6dbfa8bc8b09d15b"
          }}
          style={styles.ImageBackground_58_314}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a48b/968e/5aad3ee8ed324793f25c8db508e8c77d"
          }}
          style={styles.ImageBackground_58_315}
        />
        <View style={styles.View_58_318}>
          <View style={styles.View_58_319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18af/9149/162616aff1918b380ca4ea7d0f10f4b3"
              }}
              style={styles.ImageBackground_58_320}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88be/1475/045144dadbe10f7501fe0413d4cd1e1d"
              }}
              style={styles.ImageBackground_58_328}
            />
          </View>
          <View style={styles.View_58_336}>
            <View style={styles.View_58_337} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b20e/e81c/d59d6a05f6c3fc35315d7cf3ded9dd3a"
              }}
              style={styles.ImageBackground_58_338}
            />
          </View>
        </View>
        <View style={styles.View_58_339}>
          <Text style={styles.Text_58_339}>Lovely evening coffee</Text>
        </View>
        <View style={styles.View_58_340}>
          <Text style={styles.Text_58_340}>2022 -01 -05</Text>
        </View>
      </View>
      <View style={styles.View_58_402}>
        <View style={styles.View_58_403} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef1f/042b/b2a45dbb5e4f08c3f0e5b8b560b07841"
          }}
          style={styles.ImageBackground_58_404}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84fa/6045/d6f2b4ca654371392bea6384d272932f"
          }}
          style={styles.ImageBackground_58_405}
        />
        <View style={styles.View_58_408}>
          <View style={styles.View_58_409}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18af/9149/162616aff1918b380ca4ea7d0f10f4b3"
              }}
              style={styles.ImageBackground_58_410}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88be/1475/045144dadbe10f7501fe0413d4cd1e1d"
              }}
              style={styles.ImageBackground_58_418}
            />
          </View>
          <View style={styles.View_58_426}>
            <View style={styles.View_58_427} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb8f/e860/c3e1205a5f66a22598f8483ec2586fee"
              }}
              style={styles.ImageBackground_58_428}
            />
          </View>
        </View>
        <View style={styles.View_58_429}>
          <Text style={styles.Text_58_429}>Autumn Collection</Text>
        </View>
      </View>
      <View style={styles.View_58_431}>
        <Text style={styles.Text_58_431}>2022 -01 -02</Text>
      </View>
      <View style={styles.View_67_1462}>
        <Text style={styles.Text_67_1462}>More</Text>
      </View>
      <View style={styles.View_67_1463} />
      <View style={styles.View_67_1464}>
        <View style={styles.View_I67_1464_63_1395}>
          <View style={styles.View_I67_1464_63_1396}>
            <View style={styles.View_I67_1464_63_1396_63_1239} />
            <View style={styles.View_I67_1464_63_1396_63_1241}>
              <Text style={styles.Text_I67_1464_63_1396_63_1241}>Order</Text>
            </View>
          </View>
          <View style={styles.View_I67_1464_63_1397}>
            <View style={styles.View_I67_1464_63_1397_63_1232} />
            <View style={styles.View_I67_1464_63_1397_63_1234}>
              <Text style={styles.Text_I67_1464_63_1397_63_1234}>News</Text>
            </View>
          </View>
          <View style={styles.View_I67_1464_63_1398}>
            <View style={styles.View_I67_1464_63_1398_63_1232}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90bd/7ce1/00d714ebf82170d417aa2f30a10a5496"
                }}
                style={styles.ImageBackground_I67_1464_63_1398_69_2571}
              />
            </View>
            <View style={styles.View_I67_1464_63_1398_63_1234}>
              <Text style={styles.Text_I67_1464_63_1398_63_1234}>About us</Text>
            </View>
          </View>
          <View style={styles.View_I67_1464_63_1400}>
            <View style={styles.View_I67_1464_63_1400_63_1232} />
            <View style={styles.View_I67_1464_63_1400_63_1234}>
              <Text style={styles.Text_I67_1464_63_1400_63_1234}>More</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I67_1464_63_1401}>
          <View style={styles.View_I67_1464_63_1402}>
            <View style={styles.View_I67_1464_63_1403} />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9576/14c0/90ce12f2d64cbe602541756ed7fbe5a0"
        }}
        style={styles.ImageBackground_67_1465}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/953a/7b50/20d67cde0c98fd486b1ebe809db6526b"
        }}
        style={styles.TouchableOpacity_67_1466}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_55"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fad9/415b/09af27c10e37c54f9f4334bbab6b79e3"
        }}
        style={styles.TouchableOpacity_67_1467}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("26_117"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc7/29dd/5ec62a120a192c10d72f3d6e52434a9a"
        }}
        style={styles.ImageBackground_67_1468}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("127%") },
  View_21_163: {
    width: wp("110%"),
    minWidth: wp("110%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10%"),
    top: hp("10%"),
    backgroundColor: "rgba(211, 173, 127, 1)"
  },
  ImageBackground_57_125: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_4_66: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_4_66: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_4_68: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_4_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_21_144: {
    width: wp("88%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_145: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_146: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_147: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_21_148: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_21_149: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_21_150: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_21_151: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_21_155: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_21_156: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_21_161: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_162: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_21_162: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "100",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  ImageBackground_57_124: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("20%"),
    resizeMode: "cover"
  },
  View_58_312: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("44%"),
    backgroundColor: "rgba(252, 207, 91, 1)",
    overflow: "hidden"
  },
  View_58_313: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(149, 117, 65, 1)"
  },
  ImageBackground_58_314: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("-10%")
  },
  ImageBackground_58_315: {
    width: wp("37%"),
    height: hp("20%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  View_58_318: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("8%")
  },
  View_58_319: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_58_320: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_58_328: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_58_336: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_58_337: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_58_338: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_58_339: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_58_339: {
    color: "rgba(252, 207, 91, 1)",
    fontSize: 21.733339309692383,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_58_340: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_58_340: {
    color: "rgba(252, 207, 91, 1)",
    fontSize: 10.866669654846191,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_58_402: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("91%"),
    backgroundColor: "rgba(252, 207, 91, 1)",
    overflow: "hidden"
  },
  View_58_403: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(99, 60, 24, 1)"
  },
  ImageBackground_58_404: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("-10%")
  },
  ImageBackground_58_405: {
    width: wp("37%"),
    height: hp("20%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  View_58_408: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("8%")
  },
  View_58_409: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_58_410: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_58_418: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_58_426: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_58_427: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_58_428: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_58_429: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_58_429: {
    color: "rgba(252, 207, 91, 1)",
    fontSize: 21.733339309692383,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_58_431: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("94%"),
    justifyContent: "flex-start"
  },
  Text_58_431: {
    color: "rgba(252, 207, 91, 1)",
    fontSize: 10.866669654846191,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_1462: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("120%"),
    justifyContent: "flex-start"
  },
  Text_67_1462: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_67_1463: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("114%"),
    backgroundColor: "rgba(211, 173, 127, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_67_1464: {
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("115%"),
    backgroundColor: "rgba(47, 48, 51, 1)",
    overflow: "hidden"
  },
  View_I67_1464_63_1395: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I67_1464_63_1396: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I67_1464_63_1396_63_1239: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I67_1464_63_1396_63_1241: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I67_1464_63_1396_63_1241: {
    color: "rgba(154, 160, 166, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I67_1464_63_1397: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I67_1464_63_1397_63_1232: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I67_1464_63_1397_63_1234: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I67_1464_63_1397_63_1234: {
    color: "rgba(154, 160, 166, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I67_1464_63_1398: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I67_1464_63_1398_63_1232: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I67_1464_63_1398_69_2571: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I67_1464_63_1398_63_1234: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I67_1464_63_1398_63_1234: {
    color: "rgba(154, 160, 166, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I67_1464_63_1400: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I67_1464_63_1400_63_1232: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I67_1464_63_1400_63_1234: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I67_1464_63_1400_63_1234: {
    color: "rgba(154, 160, 166, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I67_1464_63_1401: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I67_1464_63_1402: {
    width: wp("84%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(47, 48, 51, 1)"
  },
  View_I67_1464_63_1403: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("1%"),
    backgroundColor: "rgba(153, 153, 153, 1)"
  },
  ImageBackground_67_1465: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  TouchableOpacity_67_1466: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  TouchableOpacity_67_1467: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_67_1468: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
