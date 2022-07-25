import React from 'react';
import styles from '../styles/Spreadit.module.css';
import Link from 'next/link';

const Spreadit = () => {
  return (
    <div className={styles.container}>
      <h1>Cycle #014: www.spreadit.pro</h1>
      <sub>@jpfraneto - 25 jul 2022</sub>
      <p>
        The motivation behind this project is for me to become the best software
        engineer that I can. I know that growth lies in the space on which
        challenge is, and for me trying to bring myself into a team of highly
        competent software engineers is the means by which I stretch what I'm
        capable of doing. I don't feel qualified at all for the job, and that is
        precisely why I'm doing what I'm doing.
      </p>
      <p>
        I really don't care. I'm beginning to learn that shooting for the stars
        is the means by which I will make my way through this enormous
        ecosystem.{' '}
      </p>
      <p>
        For applying for the job I had to complete a homework, which I felt -and
        still feel- that is out of my reach as a programmer. I don't really know
        how to do it. But what I have learned by teaching myself how to code is
        that there are no impossibles. There are only different ways of
        approaching a problem, and the consistency and capacity to be able to
        grind through it as I use more and more of my creativity, problem
        solving skills, and curiosity to be able to build something that does
        the work.{' '}
      </p>
      <p>I'm building this whole system as an answer to that.</p>
      <p>
        They said that it is not necessary to do documentation, or user
        interface, but I have learned through my experience that I like doing
        the whole thing. I want to build a front end that interacts with the
        back end that I have built, and that is the best testing that I can come
        up with. I know that it may be overkill, but it is the best I can do.
      </p>
      <p>
        Worst case scenario: I don't get the job, but I practiced a lot my
        skills of building systems with which people can interact. That is my
        mission for becoming a developer, and it is why I'm here.
      </p>
      <h2>What the app is about</h2>
      <p>Spreadit consists of three main parts:</p>
      <ul>
        <li>
          The Front End: <a>www.spreadit.pro</a>
        </li>
        <li>
          The Back End: <a>api.spreadit.pro</a>
        </li>
        <li>
          The Documentation: <a>docs.spreadit.pro</a>
        </li>
      </ul>
      <p>
        Each of this elements interact in a specific way to enable two types of
        user to perform the main action of evaluation how the spread of
        different markets of cryptocurrencies evolve in time. This two types are
        developers, that can create systems that interact with the API
        (back-end) or just users that create a profile in the front end and in
        there build their alert systems to let them know when there is something
        worth knowing happening.
      </p>
      <p>What does worth knowing mean?</p>
      <p>That depends completely on the user.</p>
      <p>
        My goal as I create this application is to understand how spreads are
        useful for the user as the means for understanding how the markets are
        evolving, so that with that information they can make better investment
        decisions.
      </p>
      <p>
        The main challenge of the system is build a pooling system on the
        server.{' '}
      </p>
      <p>
        I will work my best into this project to create something cool and
        useful.
      </p>
      <p>jp</p>
      <Link href='/'>
        <a>Back</a>
      </Link>
    </div>
  );
};

export default Spreadit;
