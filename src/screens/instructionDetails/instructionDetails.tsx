import React, { useEffect, useState, useRef } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { getInstructionDetails } from "../../api";
import { Instruction } from "../../api/models";
import {
    Text
} from 'native-base';
import {
    Loader
} from '../../components';
import {
    ScrollView,
    View
} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

// type checking.
interface Props {
    navigation: StackNavigationProp<any>;
    route: any;
};

/**
 * Instruction screen
 * 
 * @param {Props} navigation 
 * @returns 
 */
function InstructionDetails({ navigation, route }: Props) {
    const [bodyLoading, setBodyloading] = useState(false);
    const [instructionModel, setInstructionModel] = useState<Instruction>();
    const video = useRef(null);
    const [status, setStatus] = useState({});

    /**
     * Get instruction detail by selected id form route
     */
    useEffect(() => {
        setBodyloading(true);
        let selectedId = route.params.selectedId;
        getInstructionDetails(selectedId).then((response) => {
            if (response.kind === "OK") {
                console.log(response.instruction);

                setInstructionModel(response.instruction as Instruction);
            }
            setBodyloading(false);
        });
    }, [])

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView>
                {instructionModel !== null ? (
                    <View>
                        <Text style={styles.title}>{instructionModel?.title}</Text>
                        <Text style={styles.description}>
                            <Text style={styles.label}>Description :</Text>
                            {instructionModel?.description}
                        </Text>
                        {instructionModel?.steps !== undefined && instructionModel.steps.length ? (
                            <View>
                                <Text style={styles.label}>Instruction Steps</Text>

                                {instructionModel.steps.map((row, i) => {
                                    return (
                                        <Text style={styles.step}>{`* ${row.step}`}</Text>
                                    )
                                })}
                            </View>
                        ) : []}
                    </View>
                ) : []}
            </ScrollView>
            {bodyLoading && <Loader />}
        </SafeAreaView>
    );
};

export default InstructionDetails;