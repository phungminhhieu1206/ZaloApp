import React from 'react'
import { View, Text } from 'react-native'
import CustomInput from "../../common/CustomInput"

const CreatePostComponent = () => {
    return (
        <View>

            <CustomInput
                label="Described"
                placeholder="Write your thoughts ..."
                style={{
                    // minHeight: 100,
                    borderWidth: 1,
                    borderColor: 'red'
                }}
                styleBoxInput={{
                    minHeight: 100
                }}
                multiline={true}
            />
        </View>
    )
}

export default CreatePostComponent
