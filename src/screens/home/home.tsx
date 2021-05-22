import React, { useEffect, useState, useContext } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { getInstructions } from "../../api";
import { Instruction } from "../../api/models";
import {
    Loader
} from '../../components';
import { Card } from 'react-native-elements'
import {
    ScrollView,
    View
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import {
    Button,
    Text
} from 'native-base';

// type checking.
interface Props {
    navigation: StackNavigationProp<any>;
};

/**
 * Home screen
 * 
 * @param {Props} navigation 
 * @returns 
 */
function HomeScreen({ navigation }: Props) {
    const [loading, setloading] = useState(false);
    const [instructions, setInstructions] = useState<Instruction[]>([]);
    const [nextLink, setNextLink] = useState<string>();

    /**
     * Load instructions
     */
    useEffect(() => {
        setloading(true);
        getInstructions().then((response) => {
            setInstructions(response.instructions as Instruction[]);
            setNextLink(response.nextLink);
            setloading(false);
        });
    }, [])

    /**
     * handle show instruction details by id
     * 
     * @param id 
     */
    function handleShowInstructionDetails(id: string) {
        navigation.navigate('InstructionDetails', {
            selectedId: id
        });
    }

    /**
     * Handle load more instructions
     */
    function handleLoadMore() {
        setloading(true);
        getInstructions(nextLink).then((response) => {
            setInstructions(instructions.concat(response.instructions as Instruction[]));
            setNextLink(response.nextLink);
            setloading(false);
        });
    }

    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.title}>Instructions</Text>
            <ScrollView>
                {instructions.map((row, i) => {
                    return (
                        <TouchableRipple
                            style={styles.instructionItem}
                            key={i}
                            onPress={() => handleShowInstructionDetails(row.id)}
                        >
                            <View  >
                                <Card>
                                    <Card.Title style={styles.instructionTitle}>{row.title}</Card.Title>
                                    <Card.Divider />
                                    <Text>
                                        <Text style={styles.label}>
                                            Description :
                                            </Text>
                                        {row.description}
                                    </Text>
                                </Card>
                            </View>
                        </TouchableRipple>
                    );
                })}
                {nextLink ? (
                    <Button
                        style={styles.btn}
                        onPress={handleLoadMore}
                        hasText
                        transparent
                    >
                        <Text style={styles.btnText} >Load more</Text>
                    </Button>
                ) : []}
            </ScrollView>
            {loading && <Loader />}
        </SafeAreaView>
    );
};

export default HomeScreen;