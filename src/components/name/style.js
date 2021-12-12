import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../helpers/colors';
export default StyleSheet.create({
	container: {
		marginVertical: 10,
		alignItems: 'center',
		marginHorizontal: 15,
		flexDirection: 'row',
		paddingVertical: 10,
		borderLeftWidth: 3,
	},
	name: {
		fontSize: 14,
		color: colors.black,
		marginLeft: 5,
	},
});
