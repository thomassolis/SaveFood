import { Typography } from "@/src/components/ui/Texts/Texts";
import { ProductType } from "@/src/types/ProductsTypes/products";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { Image, StyleSheet, View } from "react-native";

export function ProductCard({ productsData }: { productsData: ProductType }) {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../assets/images/breadImg.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.badgeContainer}>
          <View style={styles.ratingBadge}>
            <AntDesign name="star" size={14} color="#FDC700" />
            <Typography style={styles.ratingText}>{productsData.puntuation}</Typography>
          </View>
          <View style={styles.heartBadge}>
            <Entypo name="heart-outlined" size={20} color="black" />
          </View>
        </View>
      </View>

      <View style={styles.content}>
        {/* LADO IZQUIERDO: Info del Producto */}
        <View style={styles.leftColumn}>
          <Typography style={styles.productName} variant="paragraph">
            {productsData.name}
          </Typography>
          <Typography style={{ color: "gray" }} variant="caption">
            {productsData.section}
          </Typography>
          
          <View style={styles.iconRow}>
            <MaterialIcons name="access-time" size={16} color="gray" />
            <Typography style={styles.iconText} variant="caption">
              {productsData.time}
            </Typography>
          </View>
        </View>

        {/* LADO DERECHO: Precios y Distancia */}
        <View style={styles.rightColumn}>
          <View style={styles.priceRow}>
            <Typography style={styles.currentPrice} variant="title">
              ${productsData.price}
            </Typography>
            <Typography style={styles.oldPrice} variant="caption">
              ${productsData.oldPrice}
            </Typography>
          </View>

          <Typography style={styles.saveText} variant="caption">
            Ahorra ${productsData.oldPrice - productsData.price}.00
          </Typography>

          <View style={[styles.iconRow, { justifyContent: 'flex-end' }]}>
            <Octicons name="location" size={16} color="gray" />
            <Typography style={styles.iconText} variant="caption">
              {productsData.distance} km
            </Typography>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 14,
    overflow: "hidden",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    marginHorizontal: 20,
    marginBottom: 20,
  },
  imageWrapper: { width: "100%", height: 150 },
  image: { width: "100%", height: "100%" },
  
  // Badges sobre la imagen
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 10,
    width: '100%',
    paddingHorizontal: 10
  },
  ratingBadge: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 4
  },
  ratingText: { color: 'black', fontSize: 12, fontWeight: '700' },
  heartBadge: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 6,
  },

  // Contenedor principal
  content: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Alinea arriba para que no se estiren las columnas
  },
  leftColumn: { flex: 1.2 }, // Toma un poco más de espacio para el nombre
  rightColumn: { flex: 1, alignItems: 'flex-end' },

  // Textos específicos
  productName: { color: "black", fontWeight: '700', fontSize: 16 },
  priceRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  currentPrice: { color: "#4F46E5", fontWeight: '800' },
  oldPrice: { color: "gray", textDecorationLine: 'line-through', fontSize: 12 },
  saveText: { color: "green", fontWeight: '600' },

  // Filas con iconos (Tiempo y Ubicación)
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 4,
  },
  iconText: { color: "gray", fontSize: 12 }
});