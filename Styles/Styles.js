import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

//HomeScreen tyylit
    containerHS: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderWidth: 0,
      borderColor: '#0077B6',
      borderRadius: 5,
      backgroundColor: '#ffffff',
    },
    infoContainer: {
      flexDirection: 'row',
      marginBottom: 20,
      textAlign: 'center',
    },
    dayContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    dayText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    dayOfWeekText: {
      fontSize: 16,
    },
    trainingInfoBox: {
      backgroundColor: 'ffffff',
      borderWidth: 2,
      borderColor: '#0077B6',
      borderRadius: 5,
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginHorizontal: 5,
      width: '40%',
      height: 120,
      textAlign: 'center',
    },
    trainingInfoText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
    },
    buttonHS: {
      backgroundColor: '#0077B6',
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 5,
      marginBottom: 75,
      width: '80%',
      height: 60,
    },
    buttonTextHS: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    WeekCalendar: {
      backgroundColor: "#ffffff",
      borderWidth: 2,
      borderColor: "#0077B6",
      borderRadius: 5,
      height: '5%',
      maxHeight: 70,
      width: '80%',
      margin: 20,
    },
    liftedKilos: {
      backgroundColor: "#ffffff",
      borderWidth: 3,
      borderColor: "#0077B6",
      borderRadius: 5,
      height: 100,
      width: '80%',
      margin: 50,
    },
    liftedKilosText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 30,
    },

//TrackingScreen tyylit
    containerTS: {
      flex: 1,
   },
    mapTS: {
      flex: 1,
    },
    buttonTS: {
      position: 'absolute',
      bottom: 20,
      alignSelf: 'center',
      backgroundColor: '#0077B6',
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 5,
    },
    buttonTextTS: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },

//Logging tyylit
    containerLog: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#fff",
    },
    iconLog: {
      width: 100,
      height: 100,
      marginBottom: 10,
      marginTop: 35,
    },
  
    titleTextLog: {
      fontSize: 30,
      marginBottom: 24,
      color: "#0077b6",
      textAlign: 'center',
    },
//Mappi tyylit
    map: {
      width: '100%',
      height: '100%',
  },
//Settings tyylit
  containerSet: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonSet: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonTextSet: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  smallButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  smallButtonText: {
    color: '#000',
    textAlign: 'center',
  },

  //Signing Tyylit
  containerSign: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  iconSign: {
    width: 128,
    height: 100,
    marginBottom: 10,
    marginTop: 35,
  },

  titleTextSign: {
    fontSize: 30,
    marginBottom: 24,
    color: "#0077b6",
    textAlign: 'center',
  },

  //SignUp tyylit

  containerSgUp: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  titleTextSgup: {
    fontSize: 20,
    marginBottom: 24,
    color: "#646464",
  },
  labelTextSgup: {
    alignSelf: "flex-start",
    color: "#0077b6",
    fontSize: 22,
    marginBottom: 8,
    marginLeft: 50,
  },
  inputContainer: {
    width: "75%",
  },
  input: {
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 25,
    padding: 15,
    fontSize: 16,
    width: "75%",
  },
  forgotPasswordText: {
    textAlign: "center",
    color: "#646464",
    marginBottom: 24,
  },
  buttonSGup: {
    backgroundColor: "#0077b6",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    marginTop: 20,
    width: "75%",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonTextSgUp: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    color: "#000",
    fontSize: 16,
    marginVertical: 20,
  },
  iconSGup: {
    marginLeft: 25,
    width: 24,
    height: 24,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 30,
    backgroundColor: "#fff",
    padding: 10,
  },
  backButtonText: {
    color: "#000",
    fontSize: 20,
  },
  backButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    marginRight: 15,
    width: 30,
    height: 25,
  },

  

  });