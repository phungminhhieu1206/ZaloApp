import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import CustomInput from "../../common/CustomInput"
import Container from "../../common/Container"
import Icon from '../../common/Icon'
import colors from '../../../assets/themes/colors'

const CreatePostComponent = () => {
    return (
        <Container>
            <CustomInput
                label="Described"
                placeholder="Write your thoughts ..."
                styleBoxInput={{
                    height: 200
                }}
                multiline={true}
            />
            <TouchableOpacity style={{
                flexDirection: 'row',
                paddingVertical: 8,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
                backgroundColor: colors.grey
            }}>
                <Icon
                    type="FontAwesome"
                    name="photo"
                    size={24}
                    color="#2CB427"
                    style={{
                        paddingRight: 10
                    }}
                />
                <Text style={{
                    color: colors.text,
                    fontSize: 14,
                }}>Upload Photo</Text>
            </TouchableOpacity>
        </Container>
    )
}

export default CreatePostComponent
