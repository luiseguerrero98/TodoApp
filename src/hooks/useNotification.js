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
                    text: 'Error al agregar'
                }
            });
        } else {
            setNotificationState({
                visible: true,
                message: {
                    title: '¡Éxito!',
                    text: 'Agregado correctamente'
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
                    text: 'Error al eliminar'
                }
            });
        } else {
            setNotificationState({
                visible: true,
                message: {
                    title: '¡Éxito!',
                    text: 'Eliminado correctamente'
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
                    text: 'Error al actualizar'
                }
            });  
        } else {
            setNotificationState({
                visible: true,
                message: {
                    title: '¡Éxito!',
                    text: 'Actualizado correctamente'
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
