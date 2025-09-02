import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface useContextType{
    nome: string;
    setNome: (nome:string) => void;
}

export const useContext = createContext<useContextType>({
    nome: "",
    setNome: () => {},
});

interface UseProviderProps{
    children: ReactNode;
}