import React, { useEffect, useState, useRef } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { getInstructionDetails } from "../../api";
import { Instruction } from "../../api/models";
import {
    Text,
    Button
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
                setInstructionModel(response.instruction as Instruction);
            }
            setBodyloading(false);
        });
    }, [])

    function handleTriggerVideo() {
        if (!video) return;

        if (status && status.isPlaying) {
            video.current.pauseAsync();
        } else {
            video.current.playAsync()
        }
    }

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView>
                {!bodyLoading && instructionModel !== null ? (
                    <View>
                        <Text style={styles.title}>{instructionModel?.title}</Text>
                        <Text style={styles.description}>
                            <Text style={styles.label}>Description :</Text>
                            {instructionModel?.description}
                        </Text>
                        <Video
                            ref={video}
                            style={styles.video}
                            source={{
                                uri: instructionModel?.url || "",
                            }}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <View style={styles.buttonGroup}>
                            <Button
                                onPress={handleTriggerVideo}
                                style={styles.btn}
                                hasText
                                transparent
                            >
                                <Text style={styles.btnText}>{status && status.isPlaying ? 'Pause' : 'Play'}</Text>
                            </Button>
                        </View>
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