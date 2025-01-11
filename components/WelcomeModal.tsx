// src/screens/WelcomeModal.tsx
import React from "react";
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface WelcomeModalProps {
  visible: boolean;
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View className="flex-1 justify-center items-center bg-black-100/40 bg-opacity-50">
        <View className="w-[80%] bg-white rounded-xl items-center">
          <View className=" p-5">
            <Text className="text-xl font-rubik-bold text-center">
              Wilkommen bei FrischZeit 🥬
            </Text>
            <Text className="my-3 text-center">
              Wir freuen uns, dass du die App benutzen möchtest!
            </Text>
          </View>
          <TouchableOpacity
            onPress={onClose}
            className="bg-primary-100 w-full flex justify-center items-center p-2 rounded-b-xl"
          >
            <Text className="text-primary-200 text-lg font-rubik-semibold">
              Los legen!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default WelcomeModal;
