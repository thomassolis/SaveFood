interface LoginTypes {
    email:string,
    password: string
}

export const login = ({email, password}:LoginTypes) => {
    
    try{
        return {
            success: true,
            message: 'Te has logueado correctamente!',
            data: {
                name: 'Thomas',
                lastName: 'Solis',
                rol: 'customer'
            }
        }    
    }catch(error){
        console.error('Error en Login', error);
    }
}