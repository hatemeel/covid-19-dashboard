import React, { useState } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { Colors } from '../styles/colors';
import { globalStyles, margin } from '../styles/global';
import Icon from './Icon';
import RobotoText from './RobotoText';

function Picker({ value, onSelect, options = [], t }) {
  const [pickerOpen, setPickerOpen] = useState(false);

  const openPicker = () => {
    setPickerOpen(true);
  };

  const closePicker = () => {
    setPickerOpen(false);
  };

  const selectOption = (option) => {
    closePicker();
    onSelect(option.value);
  };

  return (
    <View>
      <TouchableOpacity
        style={[globalStyles.btn, globalStyles.bgLight]}
        onPress={openPicker}
      >
        <Icon name="translate-2" style={[globalStyles.icon]} />
        <RobotoText
          style={[
            globalStyles.textBold,
            globalStyles.text_3,
            margin('left', 15),
          ]}
        >
          {t('app.chooseLanguage')}
        </RobotoText>
      </TouchableOpacity>

      <Modal visible={pickerOpen} transparent={true} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <TouchableWithoutFeedback onPress={closePicker}>
            <View style={styles.picker__backdrop} />
          </TouchableWithoutFeedback>

          <View style={styles.picker__body}>
            <View
              style={[
                styles.picker__title,
                margin('top', 5),
                { paddingVertical: 15 },
              ]}
            >
              <RobotoText style={[styles.picker__title, globalStyles.text_4]}>
                {t('app.chooseFromList')}
              </RobotoText>

              <Icon
                style={styles.picker__close}
                name="check-double-line"
                onPress={closePicker}
              />
            </View>

            <ScrollView style={{ paddingBottom: 20 }}>
              {options.map((option, optionIndex) => (
                <TouchableOpacity
                  key={Math.random().toString()}
                  style={[
                    globalStyles.btn,
                    styles.picker__item,
                    optionIndex ? { borderTopWidth: 1 } : {},
                    option.value === value
                      ? { backgroundColor: Colors.dark }
                      : {},
                  ]}
                  onPress={() => selectOption(option)}
                >
                  <RobotoText
                    style={
                      option.value === value ? { color: Colors.white } : {}
                    }
                  >
                    {option.label}
                  </RobotoText>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const mapStateToProps = (state) => ({
  t: state.app.translate,
});

export default connect(mapStateToProps)(Picker);

const styles = StyleSheet.create({
  picker__title: {
    position: 'relative',
    textAlign: 'center',
    justifyContent: 'center',
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
  },
  picker__close: {
    position: 'absolute',
    right: 15,
    fontSize: 28,
    color: Colors.dark,
  },
  picker__backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  picker__body: {
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    // height: 200,
    backgroundColor: Colors.menuItemActive,
  },
  picker__item: {
    borderTopColor: Colors.borderColor,
  },
});
