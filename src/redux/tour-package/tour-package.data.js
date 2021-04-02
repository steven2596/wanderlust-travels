import package1 from '../../assets/images/package-a.jpg';
import package2 from '../../assets/images/package-b.jpg';
import package3 from '../../assets/images/package-c.jpg';

const TOUR_DATA = [
    {
        id: 1,
        title: 'A',
        image: package1,
        destinations: [
            'Geneva', 'Bern', 'Zermatt', 'Jungfraujosh & Interlaken', 'Lucern', 'Mt. Pilatus', 'Zurich'
        ]
    },
    {
        id: 2,
        title: 'B',
        image: package2,
        destinations: [
            'Zurich', 'Bern', 'Lake Geneva', 'Montreux', 'Zermatt', 'Baveno', 'St Moritz', 'Lucerne', 'Brienz'
        ]
    },
    {
        id: 3,
        title: 'C',
        image: package3,
        destinations: [
            'Zurich', 'Biel', 'Neuchatel', 'Geneva', 'Broc', 'Gruyeres', 'Interlaken', 'Grindelwald', 'Bern', 'Lucerne'
        ]
    },
];

export default TOUR_DATA;