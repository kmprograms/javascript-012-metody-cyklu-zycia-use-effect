import React, {useState, useEffect} from 'react';

/*
    Metody cyklu zycia takie jak componentDidMount nie moga byc uzywanie w komponentach
    funkcyjnych. Uzywamy je w komponentach klasowych.

    W jaki sposob kiedy uzywamy hooks realizowac logike, ktora do tej pory umieszczalismy
    w metodach cyklu zycia?

    useEffect to kombinacja metod: componentDidMount, componentDidUpdate, componentWillUnmount
*/

const App = () => {

    // componentDidMount
    // kod w tej metodzie wykonywany jest jeden raz, kiedy komponent jest 'montowany'
    // uzywajac useHook takie zachowanie uzyskamy kiedy zastosujemy implementacje:
    useEffect(() => {
        console.log('COMPONENT DID MOUNT 1');
    }, []);

    // Kiedy nie podamy zadnego drugiego parametru ( tak jak w ponizszym przykladzie )
    // wtedy useEffect wykonuje sie za kazdym razem kiedy komponent jest renderowany
    useEffect(() => {});

    // componentWillUnmount
    // kod w tej metodzie ma za zadanie sprzatac po komponencie
    // podczas takiego sprzatania moga byc usuwane event listeners, zatrzymywane timery
    // najczesciej cos co jest na potrzeby pracy w komponencie inicjalizowane i uruchamiane
    // w metodzie componentDidMount nastepnie jest zatrzymywane / usuwane w metodzie
    // componentWillUnmount
    // Ponizej zaimplementowano takie zachowanie z wykorzystaniem hooks

    useEffect(() => {
        // wywolane tylko jeden raz na samym poczatku kiedy komponent jest montowany
        console.log('COMPONENT DID MOUNT 2');

        // to co po return jest wywolane kiedy komponent ma byc 'odmontowany'
        return () => {
            console.log('COMPONENT WILL UMOUNT 2');
        }

    }, []);


    // componentDidUpdate
    const x = 10;
    useEffect(() => {
        // kod wykona sie tylko wtedy kiedy zmieni sie wartosc zmiennej x
    }, [x])

    // componentWillMount ???

};
export default App;
