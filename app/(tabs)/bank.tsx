import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Dimensions, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { NativeSyntheticEvent, NativeScrollEvent } from "react-native";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const [isBalanceVisible, setBalanceVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Beranda");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const bannerImages = [
    { id: "1", title: "Promo 1" },
    { id: "2", title: "Promo 2" },
  ];

  const toggleBalanceVisibility = () => {
    setBalanceVisible(!isBalanceVisible);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setCurrentImageIndex(index);
  };

  const mainMenus = [
    { id: "1", name: "Top Up", icon: "account-balance-wallet" },
    { id: "2", name: "Tagihan", icon: "receipt" },
    { id: "3", name: "Setor & Tarik Tunai", icon: "atm" },
    { id: "4", name: "Lifestyle", icon: "style" },
    { id: "5", name: "QRIS Transfer", icon: "qr-code-scanner" },
    { id: "6", name: "Debit Virtual", icon: "credit-card" },
    { id: "7", name: "Catatan Keuangan", icon: "book" },
    { id: "8", name: "Investasi", icon: "trending-up" },
    { id: "9", name: "Donasi", icon: "volunteer-activism" },
    { id: "10", name: "Konversi Mata Uang", icon: "currency-exchange" },
    { id: "11", name: "Kartu Kredit", icon: "credit-card" },
    { id: "12", name: "Asuransi", icon: "security" },
    { id: "13", name: "Pinjaman", icon: "monetization-on" },
    { id: "14", name: "Produk BRI Lainnya", icon: "library-books" },
  ];

  const quickActions = [
    { id: "1", name: "Transfer", icon: "swap-horiz" },
    { id: "2", name: "BRIVA", icon: "account-balance" },
    { id: "3", name: "E-Wallet", icon: "account-balance-wallet" },
    { id: "4", name: "Pulsa / Data", icon: "smartphone" },
  ];

  const bottomTabs = [
    { id: "1", name: "Beranda", icon: "home" },
    { id: "2", name: "Riwayat", icon: "history" },
    { id: "3", name: "QRIS", icon: "qr-code-scanner" },
    { id: "4", name: "Notifikasi", icon: "notifications" },
    { id: "5", name: "Akun Saya", icon: "person" },
  ];
  interface MenuItem {
    icon: string;
    name: string;
  }

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity style={styles.menuItem}>
      <Icon name={item.icon} size={24} color="#0056A2" />
      <Text style={styles.menuText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const filteredMenus = mainMenus.filter((menu) => menu.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const renderImageBanner = () => (
    <View style={styles.bannerContainer}>
      <ScrollView ref={scrollViewRef} horizontal pagingEnabled showsHorizontalScrollIndicator={false} onScroll={handleScroll} scrollEventThrottle={16}>
        {bannerImages.map((image, index) => (
          <View key={image.id} style={styles.bannerImage}>
            <Text style={styles.bannerText}>{image.title}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {bannerImages.map((_, index) => (
          <View key={index} style={[styles.paginationDot, currentImageIndex === index && styles.paginationDotActive]} />
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>BRI</Text>
              <Text style={styles.logoOrange}>mo</Text>
              <Text style={styles.greeting}>Hai, Ian</Text>
            </View>

            <View style={styles.iconContainer}>
              <TouchableOpacity style={styles.notificationIcon}>
                <Icon name="notifications" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.customerService}>
                <Icon name="support-agent" size={24} color="white" />
                <Text style={styles.customerText}>Pusat Bantuan</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.balanceAndActionsContainer}>
            <View style={styles.balanceContainer}>
              <View style={styles.balanceInfo}>
                <Text style={styles.balanceText}>Saldo Rekening Utama</Text>
                <TouchableOpacity onPress={toggleBalanceVisibility} style={styles.iconButton}>
                  <Icon name={isBalanceVisible ? "visibility" : "visibility-off"} size={20} color="#fff" />
                </TouchableOpacity>
              </View>
              <Text style={styles.balanceAmount}>{isBalanceVisible ? "Rp200.000.000,00" : "•••••••"}</Text>
              <TouchableOpacity style={styles.allAccountsButton}>
                <Text style={styles.allAccountsText}>Semua Rekeningmu</Text>
                <Icon name="arrow-forward-ios" size={14} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.quickActionsContainer}>
              {quickActions.map((item) => (
                <TouchableOpacity key={item.id} style={styles.quickActionItem}>
                  <Icon name={item.icon} size={24} color="#0056A2" />
                  <Text style={styles.quickActionText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Cari Fitur" placeholderTextColor="#888" value={searchQuery} onChangeText={setSearchQuery} />
        </View>

        <FlatList data={filteredMenus} renderItem={renderMenuItem} keyExtractor={(item) => item.id} numColumns={4} contentContainerStyle={styles.menuContainer} ListFooterComponent={renderImageBanner} />
      </View>

      <View style={styles.bottomNav}>
        {bottomTabs.map((tab) => (
          <TouchableOpacity key={tab.id} style={styles.bottomTab} onPress={() => setActiveTab(tab.name)}>
            <Icon name={tab.icon} size={24} color={activeTab === tab.name ? "#0056A2" : "#757575"} />
            <Text style={[styles.bottomTabText, { color: activeTab === tab.name ? "#0056A2" : "#757575" }]}>{tab.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: 20,
    marginHorizontal: 15,
    height: 150,
  },
  bannerImage: {
    width: width - 30,
    height: 130,
    backgroundColor: "#0074CC",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: "#0056A2",
    width: 12,
    height: 12,
    borderRadius: 6,
  },

  container: {
    flex: 1,
    backgroundColor: "#f4f6fc",
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: "#0056A2",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  logoOrange: {
    color: "#FF6600",
    fontSize: 24,
    fontWeight: "bold",
  },
  greeting: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 8,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationIcon: {
    marginRight: 15,
  },
  customerService: {
    flexDirection: "row",
    alignItems: "center",
  },
  customerText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 5,
  },
  balanceAndActionsContainer: {
    marginTop: 10,
    backgroundColor: "#0074CC",
    borderRadius: 10,
    padding: 15,
  },
  balanceContainer: {
    alignItems: "flex-start",
  },
  balanceInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  balanceText: {
    color: "white",
    fontSize: 14,
    marginRight: 8,
  },
  iconButton: {
    padding: 4,
  },
  balanceAmount: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  allAccountsButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  allAccountsText: {
    color: "white",
    fontSize: 14,
    marginRight: 5,
  },
  quickActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
    elevation: 2,
  },
  quickActionItem: {
    alignItems: "center",
    flex: 1,
  },
  quickActionText: {
    fontSize: 12,
    marginTop: 5,
    color: "#0056A2",
    textAlign: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    marginHorizontal: 15,
    borderRadius: 25,
    marginTop: 10,
    elevation: 2,
    height: 50,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#eef2f7",
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: "#333",
  },
  menuContainer: {
    padding: 10,
  },
  menuItem: {
    flex: 1,
    alignItems: "center",
    margin: 10,
    paddingVertical: 15,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 2,
  },
  menuText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 8,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  bottomTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 0,
  },
  bottomTabText: {
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
  },
});

export default HomeScreen;
