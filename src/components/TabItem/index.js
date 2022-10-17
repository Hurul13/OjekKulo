import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const TabItem = () => {
  return (
    <TouchableOpacity
        key={ index }
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={{ flex: 1 }}
        >
        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
          {label}
        </Text>
        </TouchableOpacity>
    );
}

export default TabItem

const styles = StyleSheet.create({})