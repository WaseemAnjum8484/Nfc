import { StyleSheet } from "react-native";
import { colors } from "../../../shared/theme/colors";
import { HP, WP } from "../../../shared/theme/PixelResponsive";
import { family, size } from "../../../shared/theme/sizes";


//Login

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg1,
        marginHorizontal:WP("5"),
        justifyContent:"center",
        alignItems:"center"
    },
    logo: {
        width: WP(45),
        height: HP(7),
        alignSelf: 'center',
        marginTop: HP(25),
        resizeMode:"contain"
    },
    headingTxt: {
        color: colors.green,
        fontSize: size.h5,
        fontFamily: family.InterSemiBold,
        marginTop: HP(3),
        alignSelf: 'center'
    },
    descTxt: {
        fontSize: size.xxtiny,
        color: colors.b1,
        textAlign: 'center',
        width: '86%',
        alignSelf: 'center'
    },
    inputsBox: {
        marginTop: HP(2)
    },
    alredyAccountTxt: {
        color: colors.g21,
        alignSelf: 'center',
        marginTop: HP(4),
        fontSize: size.xsmall
    },
    signInTxt: {
        color: colors.green1,
        fontFamily: family.InterBold,
        fontSize: size.xsmall,
        textDecorationLine: 'underline',
    },
    errorMsg: {
        color: 'red',
        fontSize: size.tiny,
        fontWeight: '400',
        marginTop: HP(1)
    },
 
});

export default style;