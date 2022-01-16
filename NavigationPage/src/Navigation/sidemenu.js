import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  Platform,
  StatusBar,
} from 'react-native';

const sideBarArray = [
  {
    name: 'Home',
    navigationRoute: 'Home',
  },
  {
    name: 'Feed',
    navigationRoute: 'Feed',
  },
  {
    name: 'Help',
    navigationRoute: 'Help',
  },
];

const SidebarMenu = props => {
  const onNavigate = navigateValue => {
    props.navigation.closeDrawer();
    props.navigation.navigate(navigateValue);
  };

  const isAnyScreenSelected = (screenList, selectedScreens) => {
    const filterScreen = screenList.filter(item => {
      return item.navigationRoute == selectedScreens;
    });
    return filterScreen.length > 0 ? true : false;
  };

  const renderItem = ({item, index}) => {
    const {navigation, state, routeIndex, subRouteIndex} = props;
    const screenRoute =
      state &&
      state.routes &&
      state.routes.length > 0 &&
      state.routes[routeIndex].state &&
      state.routes[routeIndex].state.routes &&
      state.routes[routeIndex].state.routes.length > 0 &&
      state.routes[routeIndex].state.routes[subRouteIndex].state &&
      state.routes[routeIndex].state.routes[subRouteIndex].state.routes &&
      state.routes[routeIndex].state.routes[subRouteIndex].state.routes.length >
        0 &&
      state.routes[routeIndex].state.routes[subRouteIndex].state.routes[
        state.routes[routeIndex].state.routes[subRouteIndex].state.routes
          .length - 1
      ] &&
      state.routes[routeIndex].state.routes[subRouteIndex].state.routes[
        state.routes[routeIndex].state.routes[subRouteIndex].state.routes
          .length - 1
      ].name
        ? state.routes[routeIndex].state.routes[subRouteIndex].state.routes[
            state.routes[routeIndex].state.routes[subRouteIndex].state.routes
              .length - 1
          ].name
        : '';
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={[
            screenRoute == item.navigationRoute
              ? styles.drawerElementContainerWhiteBGSelected
              : item.navigationRoute == 'Home'
              ? isAnyScreenSelected(sideBarArray, screenRoute)
                ? styles.drawerElementContainerWhiteBG
                : styles.drawerElementContainerWhiteBGSelected
              : styles.drawerElementContainerWhiteBG,
          ]}
          onPress={() => onNavigate(item.navigationRoute)}>
          <Text style={[styles.drawerElementTxt, {marginTop: 1}]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const drawerList = () => {
    return (
      <View
        style={{
          alignSelf: 'center',
          marginTop: 5,
          marginBottom: 20,
          flex: 1,
        }}>
        <FlatList
          style={{flex: 1, marginBottom: 10}}
          data={sideBarArray}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-end',
          flexDirection: 'column',
        }}
        showsVerticalScrollIndicator={false}>
        {drawerList()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 30,
    width: '100%',
    height: 8,
    zIndex: 1000,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  drawerElementTxt: {
    fontSize: 14,
    color: '#000000',
  },
  drawerElementContainerWhiteBG: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    zIndex: -10,
    width: 96,
    height: 56,
    marginTop: 8,
  },
  drawerElementContainerTransparentBG: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 8,
  },

  drawerElementContainerWhiteBGSelected: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    shadowOpacity: 0.2,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {width: 1, height: 0.2},
    width: 96,
    height: 56,
    marginTop: 8,
  },
  callIconMargin: {marginTop: Platform.OS == 'ios' ? 46 : 0},
  signOutStyle: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 42,
    width: 96,
    justifyContent: 'center',
  },
});

export default SidebarMenu;
