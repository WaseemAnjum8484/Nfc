import { StyleSheet } from "react-native";
import { colors } from "../../../../shared/theme/colors";
import { HP, WP } from "../../../../shared/theme/PixelResponsive";
import { appRadius, family, size } from "../../../../shared/theme/sizes";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg1,
        padding: HP(3)
    },
    iconBox: {
        width: WP(100),
        // backgroundColor: 'red',
        height: HP(20),
        marginTop: HP(5),
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#CFCFCF',
        alignItems: 'center'
    },
    helpIcon: {
        height: WP(22),
        width: WP(24)
    },
    helpAndSupportTxt: {
        color: colors.b1,
        fontFamily: family.InterMedium,
        fontSize: size.h5,
        marginTop: HP(1)
    },
    reportBugBox: {
        flexDirection: 'row',
        height: HP(7),
        width: WP(90),
        backgroundColor: colors.bg1,
        shadowColor: colors.b1,
        elevation: 7,
        alignSelf: 'center',
        marginTop: HP(2),
        alignItems: 'center',
        borderRadius: appRadius.boxRadius,
        justifyContent: 'space-between',
        paddingHorizontal: WP(4)
    },
    bugIcon: {
        width: WP(10),
        height: WP(10),
        marginLeft: WP(2)
    },
    reportBugTxt: {
        color: colors.b1,
        marginLeft: WP(3),
        fontSize: size.normal,
        fontFamily: family.InterSemiBold
    },
    aboutIcon: {
        height: HP(.8),
        width: WP(3.5),
        marginRight: WP(2)
    },
    nextIcon: {
        height: HP(1.5),
        width: WP(1.6),
        marginRight: WP(2)
    },
    aboutPrivacyBox: {
        height: HP(25),
        width: WP(90),
        backgroundColor: colors.bg1,
        shadowColor: colors.b1,
        elevation: 5,
        borderRadius: appRadius.boxRadius,
        alignSelf: 'center',
        marginTop: HP(3),
        alignItems: 'center',
        justifyContent: 'center'
    },
    aboutPrivacyDesc: {
        color: colors.b1,
        width: WP(84),
        fontSize: size.tiny,
        // backgroundColor: 'lightblue'
    }

});

export default style