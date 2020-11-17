import React, { useState } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Modal,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import Card from './Card';
import { globalStyles, margin } from '../styles/global';
import Icon from './Icon';
import RobotoText from './RobotoText';
import { Colors } from '../styles/colors';
import Radio from './Radio';
import { connect } from 'react-redux';
import { applySortSettings, closeSortModal } from '../redux/actions';

function SortModal({
  modalOpen,
  sortSettings,
  closeModal,
  applySortSettings,
  t,
}) {
  const [sort, setSort] = useState({ ...sortSettings });
  const [processing, setProcessing] = useState(false);

  const changeSort = (prop, value) => {
    setSort((prevState) => ({
      ...prevState,
      [prop]: value,
    }));
  };

  const apply = () => {
    closeModal();
    applySortSettings(sort);
    setProcessing(false);
  };

  return (
    <Modal visible={modalOpen} transparent={true} animationType="fade">
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modal__backdrop} />
        </TouchableWithoutFeedback>

        <Card
          style={styles.modal__body}
          bodyStyle={{ paddingHorizontal: 0, paddingBottom: 0 }}
        >
          <View style={styles.modal__title}>
            <RobotoText style={[styles.modal__title, globalStyles.text_5]}>
              {t('sort.sortBy')}
            </RobotoText>

            <Icon
              style={styles.modal__close}
              name="close-line"
              onPress={closeModal}
            />
          </View>

          <View style={[margin('top', 30), styles.section]}>
            <View style={margin('bottom', 15)}>
              <Radio
                title={t('statistics.confirmed')}
                checked={sort.type === 'confirmed'}
                onCheck={() => changeSort('type', 'confirmed')}
              />
            </View>

            <View style={margin('bottom', 15)}>
              <Radio
                title={t('statistics.recovered')}
                checked={sort.type === 'recovered'}
                onCheck={() => changeSort('type', 'recovered')}
              />
            </View>

            <View style={margin('bottom', 15)}>
              <Radio
                title={t('statistics.deaths')}
                checked={sort.type === 'deaths'}
                onCheck={() => changeSort('type', 'deaths')}
              />
            </View>
          </View>

          <View style={[margin('top', 15), styles.section]}>
            <View style={margin('bottom', 15)}>
              <Radio
                title={t('statistics.total')}
                checked={sort.interval === 'total'}
                onCheck={() => changeSort('interval', 'total')}
              />
            </View>

            <View style={margin('bottom', 15)}>
              <Radio
                title={t('statistics.new')}
                checked={sort.interval === 'new'}
                onCheck={() => changeSort('interval', 'new')}
              />
            </View>
          </View>

          <View
            style={[
              margin('top', 15),
              styles.section,
              { borderBottomWidth: 0 },
            ]}
          >
            <View style={margin('bottom', 15)}>
              <Radio
                title={t('sort.desc')}
                checked={sort.desc === true}
                onCheck={() => changeSort('desc', true)}
              />
            </View>

            <View style={margin('bottom', 30)}>
              <Radio
                title={t('sort.asc')}
                checked={sort.desc === false}
                onCheck={() => changeSort('desc', false)}
              />
            </View>
          </View>

          <TouchableHighlight
            style={styles.applyButton}
            underlayColor={Colors.light}
            onPressIn={() => setProcessing(true)}
            onPressOut={apply}
          >
            {!processing ? (
              <RobotoText style={globalStyles.text_4}>
                {t('sort.apply')}
              </RobotoText>
            ) : (
              <ActivityIndicator color={Colors.dark} />
            )}
          </TouchableHighlight>
        </Card>
      </View>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    modalOpen: state.app.sortModalOpen,
    sortSettings: state.covidData.sortSettings,
    t: state.app.translate,
  };
};

const mapDispatchToProps = {
  closeModal: closeSortModal,
  applySortSettings,
};

export default connect(mapStateToProps, mapDispatchToProps)(SortModal);

const styles = StyleSheet.create({
  modal__title: {
    position: 'relative',
    textAlign: 'center',
    justifyContent: 'center',
  },
  modal__close: {
    position: 'absolute',
    right: 15,
    fontSize: 30,
    color: Colors.dark,
  },
  modal__backdrop: {
    position: 'absolute',
    backgroundColor: '#00000080',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modal__body: {
    ...globalStyles.shadow,
    width: Dimensions.get('screen').width - 30,
    maxWidth: 500,
    maxHeight: Dimensions.get('screen').height - 30,
    alignSelf: 'center',
  },
  section: {
    paddingHorizontal: 30,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
  },
  applyButton: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2E6EA',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
