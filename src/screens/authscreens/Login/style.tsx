import { StyleSheet } from "react-native";
import { colors } from "../../../shared/theme/colors";
import { HP, WP } from "../../../shared/theme/PixelResponsive";
import { family, size } from "../../../shared/theme/sizes";


//Login

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg1,
        padding: HP(5)
    },
    logo: {
        width: WP(45),
        height: HP(7),
        alignSelf: 'center',
        marginTop: HP(8),
        resizeMode:"contain"
    },
    headingTxt: {
        color: colors.green,
        fontSize: size.h5,
        fontFamily: family.InterSemiBold,
        marginTop: HP(8),
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
    viewforget:{
        justifyContent:"flex-end",
        alignItems:"flex-end",
        flex:1,
        marginTop:WP("3")
    },
    txtforget:{
        color:"#4DCB2E",
        fontSize:size.xsmall,
        fontFamily:family.InterRegular,
        fontWeight:"600",
        
    }
});

export default style;