import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment'
import { TouchableOpacity } from 'react-native-gesture-handler';

class TaskItem extends Component {
    state = {
        now: Date.now()
    }

    _interval = null

    componentDidMount() {
        const ONE_MINUTE=  60 * 1000
        this._interval = setInterval(this._refreshCreatedTime, ONE_MINUTE)
    }

    componentWillUnmount() {
        this._interval && clearInterval(this._interval)
    }

    _refreshCreatedTime = () => {
        this.setState({
            now: Date.now()
        })
    }

    _handlePressRemove = () => {
        this.props.onRemove(this.props.task.id)
    }

    _handleCompleteTask = () => {
        this.props.onToggle(this.props.task.id)
    }


    render() {
        const {task} = this.props
        const {name, completed, created} = task
        const {now} = this.state
        const createdTime = moment(created).from(moment(now))

        return (

            
            <View style={[styles.container, completed ? styles.completed : {}]}>

                <View style={styles.left}>




 <TouchableOpacity    onPress={this._handleCompleteTask}  >
                    <Ionicons
                            name="ios-location" size={30}  color={completed ? '#FFA500' : 'gray'} style={{ marginHorizontal:10 }}></Ionicons>
                    </TouchableOpacity>



                    <View style={styles.content}>
                        <Text
                            onPress={this._handleCompleteTask}
                            style={[styles.name]}>{name}</Text>


                        <Text style={styles.created}>{createdTime}</Text>


                    </View>
                </View>

               
                    <TouchableOpacity  onPress={this._handlePressRemove}  >
                    <Ionicons
                            name="ios-trash" size={25} color="#808080" style={{ marginHorizontal:10 }}></Ionicons>
                    </TouchableOpacity>
                 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        marginHorizontal:10,
        backgroundColor: '#fff',
        marginTop:20,
        marginBottom: -10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,
        flexWrap: 'wrap',
    
    },

    content: {
        paddingRight: 10
        
    },

    name: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
        paddingLeft:1,
        paddingRight:35
    },

    created: {
        color: '#999',
        fontSize: 11,
        paddingLeft:1
    },

    completed: {
        opacity: 0.5
    },

    left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
}

export default TaskItem