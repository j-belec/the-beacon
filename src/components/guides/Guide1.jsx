function Guide1() {
  return (
    <section className="guide">
      <div className="section-title">
        <h1>What is The Beacon?</h1>
      </div>
      <div className="guide__text-container">
        <p className="guide__text-p">
          The Beacon is a free-to-play fantasy action roguelite RPG, currently
          in development. Players enter a unique dungeon every time, battle
          monsters, and upgrade their combat prowess and style along the way.
          Players will need to have good timing and reflexes to defeat the
          challenges they face in real-time.
        </p>
        <p className="guide__text-p">
          There are three modes of play: single-player PvE, co-op PvE, and
          socializing in an MMO-like world. The game will be available for
          desktop and in-browser. Through gameplay, players will be able to
          acquire persistent game assets (implemented using NFT technologies).
        </p>
        <p className="guide__text-p">
          The Beacon will have multiple modes of play:
        </p>
        <ul className="guide__text-ul">
          <li className="guide__text-li">
            Roguelite Single Player PvE
            <p className="guide__text-li__p">
              Player will start a run and enter a dungeon, player creatively
              battles their way through hordes of monsters and environment
              traps, player tries not to die, and player is rewarded with
              valuable NFT loot along the way for them to keep.
            </p>
          </li>
          <li className="guide__text-li">
            Roguelite Co-op PvE
            <p className="guide__text-li__p">
              Player will form a party and start a run through a dungeon as a
              group.
            </p>
          </li>
          <li className="guide__text-li">
            Housing System
            <p className="guide__text-li__p">
              The housing system is a social game of self-expression and
              discovery. You can collect various house decor to customize your
              house. Afterwards, showcase and share your abode with friends.
            </p>
          </li>
          <li className="guide__text-li">
            Social Hangout
            <p className="guide__text-li__p">
              Players will be able to visit certain venues - the Tavern for
              example - and see other players in real time and hangout.
            </p>
          </li>
        </ul>
        <h3 className="guide__text-h3">What is a roguelite?</h3>
        <p className="guide__text-p">
          Roguelite is a game genre featuring games that are action packed,
          challenging, yet offer a ton of replayability due to drastically
          different maps and gameplay in each session. Some of our favorites in
          this genre are: Hades, The Binding of Issac, Enter the Gungeon, Dead
          Cells, Crypt of the Necromancer, and many more.
        </p>
        <p className="guide__text-p">The key features of a roguelite:</p>
        <ul>
          <li className="guide__text-li">
            Randomized game area{" "}
            <p className="guide__text-li__p">
              Our dungeons will be procedurally generated, stitching together
              different random pieces of content based on rules. As a result, no
              two dungeons are ever the same.
            </p>
          </li>
          <li className="guide__text-li">
            Characters improving during gameplay{" "}
            <p className="guide__text-li__p">
              Players have to combine various upgrades as they progress through
              a run. Because the upgrades you find will be randomly generated by
              code, you will experience different gameplay every time.
            </p>
          </li>
          <li className="guide__text-li">
            Character progression does not carry over{" "}
            <p className="guide__text-li__p">
              Upgrades to a character’s abilities obtained during a run will not
              carry over after the run finishes. This way, only the player’s
              skills progress.
            </p>
          </li>
        </ul>
        <h3 className="guide__text-h3">Difference with a Roguelike:</h3>
        <p className="guide__text-p">
          While roguelites share some similarities with roguelikes, the key
          distinction lies in the permanence of progression. In a roguelike, the
          concept of permadeath is typically more pronounced, and the player
          starts anew with each playthrough. In contrast, roguelites introduce a
          degree of persistence, allowing players to retain certain upgrades or
          unlocks across runs. This difference in progression mechanics provides
          a unique balance between the challenging, randomized nature of
          roguelikes and the sense of long-term accomplishment found in
          roguelites.
        </p>
      </div>
    </section>
  );
}

export default Guide1;
