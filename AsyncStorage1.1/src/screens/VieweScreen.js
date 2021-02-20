import React, {Component} from 'react'
import {View, StyleSheet,ImageBackground} from 'react-native'
import ListTasks from "./ListTasks";
import FormCreate from "./FormCreate";
import {getListTasks, addTask, removeTask, toggleTask} from "./StorageServices";

class HomePage extends Component {
    state = {
        tasks: [],
        loading: false
    }

    componentDidMount() {
        this._fetchListTasks()
    }

    _fetchListTasks = () => {
        this.setState({loading: true})

        getListTasks().then(tasks => {
            this.setState({
                loading: false,
                tasks: Array.isArray(tasks) ? tasks : [],
            })
        }).catch(error => {
            console.error(error)

            this.setState({loading: false})
        })
    }

    _handleOnCreate = name => {
        addTask(name)
            .then(task => {
                this.setState(({tasks}) => ({
                    tasks: [].concat([task], tasks)
                }))
            })
    }

    _handleOnRemove = id => {
        removeTask(id)
            .then((currentTasks) => {
                this.setState({
                    tasks: currentTasks
                })
            })
    }

    _handleToggleTask = (id) => {
        toggleTask(id)
            .then((tasks) => {
                this.setState({
                    tasks,
                })
            })
    }

    render() {
        const {tasks} = this.state

        return (
            <View style={styles.container}>
      

                <ListTasks onToggle={this._handleToggleTask} onRemove={this._handleOnRemove} tasks={tasks}/>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#f5f5f5'
    }
})

export default HomePage
