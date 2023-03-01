import React from "react";
import Modal from "../modal";
import Button from "../button";
import { Badge } from "../icon";
import styles from "./planUpgrade.module.css";
import Check from "../icon/check";

const features = [
  {
    lead: "Feature #1 - ",
    description: "Etiam convallis, nibh vitae dui risus",
  },
  {
    lead: "Feature #2 - ",
    description: "Etiam convallis, nibh vitae dui risus",
  },

  {
    lead: "Feature #3 - ",
    description: "Etiam convallis, nibh vitae dui risus",
  },
];

function PlanUgrade() {
  return (
    <Modal width={320} open={true} closabel={false} footer={null}>
      <div className={styles["planUpgrade-container"]}>
        <div className={styles["planUpgrade-header"]}>
          <Badge />
        </div>
        <h2 className={styles["planUpgrade-title"]}>
          Upgrade to Riddey PRO and boost productivity!
        </h2>
        <p className={styles["planUpgrade-subtitle"]}>
          Pellentesque porttitor euismod ante, accumsan consequat purus!
        </p>
        <div>
          <ul className={styles["planUpgrade-list"]}>
            {features.map((feature) => (
              <ListItem
                lead={feature.lead}
                description={feature.description}
                key={feature.lead}
              />
            ))}
          </ul>
        </div>
        <h3 className={styles["planUpgrade-footer__text"]}>Current usage</h3>
        <Button block>Add New Board</Button>
      </div>
    </Modal>
  );
}

const ListItem = ({
  lead,
  description,
}: {
  lead?: string;
  description?: string;
}) => {
  return (
    <li>
      <span className={styles["planUpgrade-list--icon"]}>
        <Check />
      </span>
      <span>
        {!!lead && <strong className="intro">{lead}</strong>}
        {description}
      </span>
    </li>
  );
};

// 2 out of 10 boards in use

export default PlanUgrade;
