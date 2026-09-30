import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Home } from './src/screens/Home';

// Criámos um ecrã de Tutorial simples diretamente aqui para exemplificar
function Tutorial({ aoTerminar }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à App!</Text>
      <Text style={styles.subtitle}>Este ecrã só vai aparecer uma vez.</Text>
      
      <TouchableOpacity style={styles.button} onPress={aoTerminar}>
        <Text style={styles.buttonText}>Entrar na App</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  // Criamos um estado para saber se é a primeira vez ou não.
  // Começa como 'null' (carregando), pois ainda não lemos o bloco de notas.
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  // O useEffect executa o código que está lá dentro ASSIM QUE a App abre.
  useEffect(() => {
    async function checkFirstLaunch() {
      // 1. Vai ao armazenamento tentar ler a nossa "nota"
      const hasOpened = await AsyncStorage.getItem('@app_ja_abriu');
      
      if (hasOpened === null) {
        // Se a nota não existe, é a primeira vez!
        setIsFirstLaunch(true);
      } else {
        // Se a nota já existe, não é a primeira vez.
        setIsFirstLaunch(false);
      }
    }
    
    checkFirstLaunch();
  }, []); // Estes parêntesis retos vazios [] significam "executa isto apenas uma vez no início"

  // Função chamada quando o utilizador clica no botão do Tutorial
  async function concluirTutorial() {
    // Escrevemos no bloco de notas para que o telemóvel se lembre da próxima vez
    await AsyncStorage.setItem('@app_ja_abriu', 'sim');
    // Atualizamos o estado para mudar de ecrã instantaneamente
    setIsFirstLaunch(false);
  }

  // Enquanto a App está a ler a memória do telemóvel, não mostramos nada (ou podíamos mostrar um ecrã de carregamento)
  if (isFirstLaunch === null) {
    return null; 
  }

  // A MÁGICA ACONTECE AQUI:
  // Se for a primeira vez, desenha o Tutorial. Se não, desenha a Home.
  if (isFirstLaunch === true) {
    return <Tutorial aoTerminar={concluirTutorial} />;
  } else {
    return <Home />;
  }
}

// Estilos apenas para o ecrã de Tutorial ficar bonito
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e24',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#04D361', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#A8A8B3', marginBottom: 30, textAlign: 'center' },
  button: { backgroundColor: '#04D361', padding: 15, borderRadius: 8 },
  buttonText: { fontSize: 16, fontWeight: 'bold', color: '#1e1e24' }
});