import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

import { styles } from './ModalScreen.styles';
import { HeaderTitle } from '../../components';

const ModalScreen = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => setShowModal(!showModal);

  return (
    <View style={styles.container}>
      <HeaderTitle title="Modals" />
      <Button title="Open modal" onPress={handleToggleModal} />
      <Modal animationType="fade" visible={showModal} transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <HeaderTitle title="Inside the modal" />
            <Text style={styles.modalText}>Modal body</Text>
            <Button title="Close modal" onPress={handleToggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export { ModalScreen };
