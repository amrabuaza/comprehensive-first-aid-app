import React, { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { getInstructions, getInstructionTags, getInstructionsByTags } from "../../api";
import { Instruction, InstructionTag } from "../../api/models";
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
import DropDownPicker from 'react-native-dropdown-picker';

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
    const [instructionTags, setInstructionTags] = useState<InstructionTag[]>([]);
    const [nextLink, setNextLink] = useState<string>();

    const [open, setOpen] = useState(false);
    const [selectedTags, setSeletedTags] = useState([]);

    /**
     * On load need to get instruction tags
     */
    useEffect(() => {
        setloading(true);
        getInstructionTags().then((response) => {
            setInstructionTags(response.tags as InstructionTag[]);
            setloading(false);
        })
    }, [])

    /**
     * When user select tags need to call api to get instructions by tags
     */
    useEffect(() => {
        setOpen(false);
        if (selectedTags) {
            setloading(true);
            getInstructionsByTags(selectedTags).then((response) => {
                setInstructions(response.instructions as Instruction[]);
                setNextLink(response.nextLink);
                setloading(false);
            })
        }
    }, [selectedTags])

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
            <DropDownPicker
                style={styles.row}
                customItemContainerStyle={styles.containerStyle}
                multiple={true}
                open={open}
                value={selectedTags}
                items={instructionTags}
                setOpen={setOpen}
                setValue={setSeletedTags}
                placeholder="Select instruction tags"
                searchable={true}
                multipleText={selectedTags.join(",")}
            />
            <ScrollView>
                {instructions.map((row, i) => {
                    return (
                        <TouchableRipple
                            style={styles.instructionItem}
                            key={i}
                            onPress={() => handleShowInstructionDetails(row.id)}
                        >
                            <View >
                                <Card containerStyle={styles.card} >
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