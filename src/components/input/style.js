import { StyleSheet } from 'react-native';
import { colors } from '../../helpers/colors';
export default StyleSheet.create({
	container: {
		marginVertical: 10,
    flex: 1,
	},
	input: {
		alignItems: 'center',
		justifyContent: 'center',
		color: colors.black,
		paddingLeft: 15,
		minHeight: 50,
		borderBottomWidth: 1,
	},
	title: {
		fontSize: 14,
		marginBottom: -8,
	},
});
