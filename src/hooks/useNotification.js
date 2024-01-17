import { useState } from "react"

export const useNotification = () => {

    const [notificationState, setNotificationState] = useState({
        visible: false,
        message: {
            title: '',
            text: '',
        }
    });

    const addNotification = (hasError) => {

        if (hasError) {
            setNotificationState({
                visible: true,
                message: {
                    title: '¡Fallo!',
                    text: 'Error al agregar To Do'
                }
            });
        } else {
            setNotificationState({
                visible: true,
                message: {
                    title: '¡Éxito!',
                    text: 'To Do agregado correctamente'
                }
            });
        }
    }
    
    const deleteNotification = (hasError) => {

        if(hasError) {
            setNotificationState({
                visible: true,
                message: {
                    title: '¡Fallo!',
                    text: 'Error al eliminar To Do'
                }
            });
        } else {
            setNotificationState({
                visible: true,
                message: {
                    title: '¡Éxito!',
                    text: 'To Do eliminado correctamente'
                }
            });
        }
    }

    const updateNotification = (hasError) => {

        if(hasError) {
            setNotificationState({
                visible: true,
                message: {
                    title: '¡Fallo!',
                    text: 'Error al actualizar To Do'
                }
            });  
        } else {
            setNotificationState({
                visible: true,
                message: {
                    title: '¡Éxito!',
                    text: 'To Do actualizado correctamente'
                }
            });
        }
    }

    const changeVisibility = () => {
        setNotificationState({
            ...notificationState,
            visible: false,
        });
    }

  return {
    ...notificationState,
    addNotification,
    deleteNotification,
    updateNotification,
    changeVisibility,
  }
}
