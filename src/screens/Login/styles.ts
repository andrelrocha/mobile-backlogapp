import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingBottom: 200
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007bff',
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%'
  },
  smallButtonGreen: {
    width: '30%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.green,
    marginRight: 10
  },
  smallButtonRed: {
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.redWeak,
    marginLeft: 10
  },
  smallButtonText: {
    color: '#fff',
    fontSize: 16
  }
});