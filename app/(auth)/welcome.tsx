import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";

const Welcome = () => {
    return (
       <ScreenWrapper>
            <Typo>welcome page</Typo>
        </ScreenWrapper>
    )
}

export default Welcome;

const styles = StyleSheet.create({})