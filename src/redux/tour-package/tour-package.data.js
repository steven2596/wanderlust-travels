import package0 from '../../assets/images/package-a.jpg';
import package1 from '../../assets/images/package-b.jpg';
import package2 from '../../assets/images/package-c.jpg';
import package3 from '../../assets/images/package-d.jpg';

const TOUR_DATA = [
    {
        id: 0,
        title: 'A',
        image: package0,
        price: 1499,
        destinations: [
            'Zurich', 'Lucerne', 'Mount Rigi', 'Interlaken', 'Bern'
        ]
    },
    {
        id: 1,
        title: 'B',
        image: package1,
        price: 1699,
        destinations: [
            'Geneva', 'Bern', 'Zermatt', 'Jungfraujosh & Interlaken', 'Lucern', 'Mt. Pilatus', 'Zurich'
        ]
    },
    {
        id: 2,
        title: 'C',
        price: 1999,
        image: package2,
        destinations: [
            'Zurich', 'Bern', 'Lake Geneva', 'Montreux', 'Zermatt', 'Baveno', 'St Moritz', 'Lucerne', 'Brienz'
        ]
    },
    {
        id: 3,
        title: 'D',
        price: 2199,
        image: package3,
        destinations: [
            'Zurich', 'Biel', 'Neuchatel', 'Geneva', 'Broc', 'Gruyeres', 'Interlaken', 'Grindelwald', 'Bern', 'Lucerne'
        ]
    }
];

export default TOUR_DATA;