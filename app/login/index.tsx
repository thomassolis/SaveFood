import { useRouter } from "expo-router";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Login() {
    const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 20 
      }}>
        {/* Tarjeta de login */}
        <View style={{ 
          backgroundColor: 'white',
          width: '100%',
          maxWidth: 400,
          borderRadius: 25,
          padding: 30,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 5,
        }}>
          
          {/* Logo y título - AHORA BIEN CENTRADO */}
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            {/* Contenedor del logo */}
            {/* <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 10 }}>
                <Image
                    source={require("../../assets/images/logo.png")}
                    style={{ width: 420, height: 220 }}
                    resizeMode="contain"
                />
            </View> */}
            
            {/* Título separado del logo */}
            <Text style={{ 
              fontSize: 32, 
              fontWeight: 'bold',
              color: '#4F46E5',
              textAlign: 'center'
            }}>
              FreshSave
            </Text>
          </View>

          {/* Textos de bienvenida */}
          <View style={{ alignItems: 'center', marginBottom: 30 }}>
            <Text style={{ 
              fontSize: 24,
              fontWeight: '600',
              color: '#333',
              marginBottom: 5
            }}>
              Bienvenido
            </Text>
            <Text style={{ 
              fontSize: 14,
              color: '#666',
              textAlign: 'center',
              paddingHorizontal: 10
            }}>
              Salva comida en buen estado y ayuda al planeta
            </Text>
          </View>

          {/* Campos del formulario */}
          <View style={{ marginBottom: 20 }}>
            <Text style={{ 
              fontSize: 14,
              fontWeight: '600',
              color: '#555',
              marginBottom: 5,
              marginLeft: 5
            }}>
              Correo Electrónico
            </Text>
            <TextInput 
              placeholder="tu@email.com"
              placeholderTextColor="#999"
              style={{ 
                backgroundColor: '#f9f9f9',
                borderRadius: 12,
                padding: 15,
                fontSize: 16,
                borderWidth: 1,
                borderColor: '#e0e0e0',
                marginBottom: 15
              }}
            />

            <Text style={{ 
              fontSize: 14,
              fontWeight: '600',
              color: '#555',
              marginBottom: 5,
              marginLeft: 5
            }}>
              Contraseña
            </Text>
            <TextInput 
              placeholder="••••••••"
              placeholderTextColor="#999"
              secureTextEntry={true}
              style={{ 
                backgroundColor: '#f9f9f9',
                borderRadius: 12,
                padding: 15,
                fontSize: 16,
                borderWidth: 1,
                borderColor: '#e0e0e0'
              }}
            />
          </View>

          {/* Botón de inicio de sesión */}
          <TouchableOpacity 
            style={{ 
              backgroundColor: '#4F46E5',
              borderRadius: 12,
              padding: 18,
              alignItems: 'center',
              marginTop: 10,
              shadowColor: "#4F46E5",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 3,
            }}
            onPress={() => router.replace("/(tabs)/explore")}
          >
            <Text style={{ 
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold'
            }}>
              Iniciar Sesión
            </Text>
          </TouchableOpacity>

          {/* Enlaces adicionales */}
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            marginTop: 20
          }}>
            <TouchableOpacity>
              <Text style={{ 
                color: '#4F46E5',
                fontSize: 14
              }}>
                ¿Olvidaste tu contraseña?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ 
                color: '#4F46E5',
                fontSize: 14,
                fontWeight: '600'
              }}>
                Registrarse
              </Text>
            </TouchableOpacity>
          </View>

          {/* Separador */}
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center',
            marginVertical: 25
          }}>
            <View style={{ flex: 1, height: 1, backgroundColor: '#e0e0e0' }} />
            <Text style={{ marginHorizontal: 10, color: '#999' }}>O</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: '#e0e0e0' }} />
          </View>

          {/* Botón de registro con Google */}
          <TouchableOpacity 
            style={{ 
              backgroundColor: 'white',
              borderRadius: 12,
              padding: 15,
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#e0e0e0',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 10
            }}
          >
            <Text style={{ fontSize: 18, color: '#666' }}>G</Text>
            <Text style={{ 
              color: '#666',
              fontSize: 16,
              fontWeight: '500'
            }}>
              Continuar con Google
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  )
}