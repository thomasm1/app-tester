﻿namespace dogsrus.virtdog {
  export var dogConfiguration = {
    appTitle: 'Daily Tech Filter',
    version: '1.0.0',
    startDog: <IDog>{
      age: 9,
      barkSound: 'bark',
      breed: 'Malamute',
      chewUrgeInterval: 1000 * 20 * 1 * 1,
      coatStyle: 'thick and coarse',
      defaultAction: 'lay around',
      dogLonelyDuration: 1000 * 60 * 60 * 1,
      dogLonelyEndurance: 1000 * 60 * 60 * .06,
      dogSleepDuration: 1000 * 60 * 60 * 6,
      dogTiredInterval: 1000 * 60 * 60 * 2,
      earState: 'relaxed',
      earStyle: 'pointed and super soft',
      familiarName: 'Zeus',
      motherNature1Interval: 1000 * 60 * 60 * 4,
      motherNature2Interval: 1000 * 60 * 60 * 8,
      speciesName: 'canis familiaris',
      squeakyOcdChewCount: 10,
      startupBlog: ' .',
      tailState: DogTailState.elevated,
      tailStyle: 'curved and furry'
    },
    otherDogs: <IDog[]>[{
        age: 0.1,
        barkSound: 'yip',
        breed: 'Mo ',
        chewUrgeInterval: 1000 * 15,
        coatStyle: '',
        defaultAction: '  around',
        dogLonelyDuration: 1000 * 60 * 60 * 6,
        dogLonelyEndurance: 1000 * 10,
        dogSleepDuration: 1000 * 60 * 4,
        dogTiredInterval: 1000 * 60 * 2,
        earState: '',
        earStyle: '',
        familiarName: '  Trouble',
        motherNature1Interval: 1000 * 60,
        motherNature2Interval: 1000 * 60 * 60 * 1,
        speciesName: ' familiaris',
        squeakyOcdChewCount: 3,
        startupBlog: ' all over!',
        tailState: DogTailState.wagging,
        tailStyle: ''
      }, {
        age: 5,
        barkSound: 'ruf',
        breed: 'Lab ',
        chewUrgeInterval: 1000 * 60 * 60 * 6,
        coatStyle: '',
        defaultAction: 'Lay  ',
        dogLonelyDuration: 1000 * 60 * 60 * 6,
        dogLonelyEndurance: 1000 * 60 * 60 * 6,
        dogSleepDuration: 1000 * 60 * 60 * 6,
        dogTiredInterval: 1000 * 60 * 60 * 6,
        earState: '',
        earStyle: '',
        familiarName: 'Rover',
        motherNature1Interval: 1000 * 60 * 60 * 6,
        motherNature2Interval: 1000 * 60 * 60 * 6,
        speciesName: 'Canis familiaris',
        squeakyOcdChewCount: 10,
        startupBlog: 'I ran ',
        tailState: DogTailState.wagging,
        tailStyle: ''
      }]
  };
  export type DogConfiguration = typeof dogConfiguration;
  getModuleCore().value('dogConfig', dogConfiguration);
}
