import React, { useState } from "react";
import "./style.scss";
import Button from "./components/button";
import Card from "./components/card";
import Modal from "./components/modal";
import Drawer from "./components/drawer";
import Accordion from "./components/accordion";

function App() {
  const [modal, setModal] = useState<boolean>(false);
  const [drawer, setDrawer] = useState<boolean>(false);

  const handleOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const openDrawer = () => {
    setDrawer(true);
  };

  const closeDrawer = () => {
    setDrawer(false);
  };

  return (
    <div className="App">
      <Button onClick={handleOpen} label="Open Modal" type="danger" />
      <Button onClick={openDrawer} label="Open Drawer" />
      <Button onClick={openDrawer} label="Open Drawer" type="ghost" />
      <Button
        onClick={openDrawer}
        label="Open Drawer"
        type="ghost"
        size="small"
      />
      <Button
        onClick={openDrawer}
        label="Open Drawer"
        type="ghost"
        size="medium"
      />
      <Button
        onClick={openDrawer}
        label="Open Drawer"
        type="ghost"
        size="large"
      />
      <Accordion
        openFirst={true}
        item={[
          { title: "Title 1", content: "Content 1" },
          { title: "Title 2", content: "Content 2" },
          { title: "Title 3", content: "Content 3" },
        ]}
      />
      <Card />
      <Modal
        isVisible={modal}
        header="Modal here..."
        body={
          <>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              molestias eveniet sunt, iure rem mollitia hic consequuntur facere
              ut. Voluptatibus odio quisquam quam ipsum alias a quas unde,
              reiciendis laborum asperiores odit perspiciatis delectus iste
              distinctio non reprehenderit. Rerum pariatur magnam cum alias
              neque ab consequatur ipsam perferendis illo asperiores.
            </p>
          </>
        }
        onClose={handleClose}
      />
      <Drawer
        closeOnEscape={false}
        isVisible={drawer}
        header="Modal here..."
        body={
          <>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              molestias eveniet sunt, iure rem mollitia hic consequuntur facere
              ut. Voluptatibus odio quisquam quam ipsum alias a quas unde,
              reiciendis laborum asperiores odit perspiciatis delectus iste
              distinctio non reprehenderit. Rerum pariatur magnam cum alias
              neque ab consequatur ipsam perferendis illo asperiores.
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              molestias eveniet sunt, iure rem mollitia hic consequuntur facere
              ut. Voluptatibus odio quisquam quam ipsum alias a quas unde,
              reiciendis laborum asperiores odit perspiciatis delectus iste
              distinctio non reprehenderit. Rerum pariatur magnam cum alias
              neque ab consequatur ipsam perferendis illo asperiores. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Labore delectus
              ipsam laudantium porro, error cum! Fugiat sed corporis ducimus
              officiis tempore provident facere, exercitationem ea est autem
              quod unde nihil, fugit atque laborum possimus eum aperiam
              eligendi! Repudiandae quae quasi odio et exercitationem sapiente
              facilis minus culpa est quibusdam fuga esse dicta molestias nemo
              voluptatibus nam consequatur sunt corrupti enim, sed magni
              explicabo quia soluta? Nostrum soluta ad, voluptates eaque vitae
              vel velit. Totam, animi quidem. Earum blanditiis sint esse
              corporis voluptates, delectus atque exercitationem quisquam nulla
              doloribus consectetur sapiente fugiat alias dicta hic nihil
              quibusdam maiores sit, quas illum minima. Repudiandae, voluptatum
              reprehenderit ipsum quaerat inventore quasi libero eius dolores
              soluta iusto impedit, delectus veniam aut doloribus numquam
              similique animi deleniti. Consequuntur distinctio temporibus
              reprehenderit minus ipsam molestias quae ad modi deleniti vero
              nemo cupiditate, iusto id magnam. Adipisci nostrum reiciendis
              obcaecati alias veritatis amet repellat, similique fuga deserunt
              maxime, nemo cumque nulla ut deleniti perferendis sapiente. Ab
              suscipit, iusto eligendi illum tempore debitis natus laboriosam.
              Laudantium veritatis recusandae aperiam animi nihil excepturi
              necessitatibus labore vitae provident, a nesciunt doloribus sint
              voluptas suscipit facere quia eligendi eveniet illo voluptatibus
              velit laborum veniam nemo accusamus. Natus, dolor magnam. Non,
              quae dignissimos! Ad eligendi autem voluptatem eveniet modi magnam
              praesentium, maxime id, tenetur aliquam voluptate, error et
              quaerat. Error, nihil beatae, unde sed nobis iusto illo
              consequatur modi perspiciatis nemo temporibus corporis adipisci
              porro veritatis eligendi expedita! Nulla explicabo beatae
              excepturi fuga, fugit consequuntur laboriosam atque facilis
              molestias mollitia a, dolores voluptates vel distinctio laborum in
              nostrum porro deleniti accusantium corrupti tempore! Qui aliquid
              exercitationem atque ad sunt expedita esse nemo, amet consectetur
              laudantium eligendi tempora vel veritatis ex dicta, a doloribus
              tempore. Inventore voluptatem delectus ad quae eum temporibus
              consectetur doloremque eos animi sit est nihil dolor eaque illo
              necessitatibus iusto laboriosam, quisquam unde mollitia nisi
              dolores veniam! Quo minima earum non explicabo perferendis quasi
              assumenda corporis ipsum provident, quam tempore ad reprehenderit
              incidunt nisi cum? Consequatur, vero eum? Hic recusandae suscipit
              iusto exercitationem praesentium earum quia. Doloremque incidunt
              atque odio quo accusantium iure! Illo maxime quae, dolor quasi,
              facilis quis rem adipisci labore quo nisi corrupti ut. Ducimus ab
              eveniet enim atque non, esse velit tempore qui repudiandae, quod,
              earum est magnam. Rerum optio, vero magni laborum provident quas
              placeat impedit, dolorum vel quod nobis beatae aspernatur ipsa
              sint, unde cupiditate quis natus sunt sapiente laboriosam harum
              aliquam. Repellendus in ea nobis consequatur fugiat totam quos
              reprehenderit, eum ut vitae neque sapiente itaque quibusdam sit
              doloribus deserunt at, doloremque porro eveniet suscipit officiis
              blanditiis, ipsa maiores. Dignissimos amet laboriosam dolor
              pariatur nesciunt voluptatem cupiditate facere eos vel tempora?
              Sint exercitationem dolorem maiores? Nihil placeat quis vitae non
              illo molestias ad nemo perspiciatis illum aperiam omnis, possimus
              quam at autem accusamus sit quos. A magni adipisci sit perferendis
              quod voluptate repellendus itaque! Sit quos corrupti deleniti
              possimus corporis, enim nisi quasi iure iste laborum aperiam animi
              sequi ipsum. Necessitatibus quibusdam illum possimus reiciendis
              reprehenderit nulla repellendus deserunt dolore repellat dolores.
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              molestias eveniet sunt, iure rem mollitia hic consequuntur facere
              ut. Voluptatibus odio quisquam quam ipsum alias a quas unde,
              reiciendis laborum asperiores odit perspiciatis delectus iste
              distinctio non reprehenderit. Rerum pariatur magnam cum alias
              neque ab consequatur ipsam perferendis illo asperiores. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Labore delectus
              ipsam laudantium porro, error cum! Fugiat sed corporis ducimus
              officiis tempore provident facere, exercitationem ea est autem
              quod unde nihil, fugit atque laborum possimus eum aperiam
              eligendi! Repudiandae quae quasi odio et exercitationem sapiente
              facilis minus culpa est quibusdam fuga esse dicta molestias nemo
              voluptatibus nam consequatur sunt corrupti enim, sed magni
              explicabo quia soluta? Nostrum soluta ad, voluptates eaque vitae
              vel velit. Totam, animi quidem. Earum blanditiis sint esse
              corporis voluptates, delectus atque exercitationem quisquam nulla
              doloribus consectetur sapiente fugiat alias dicta hic nihil
              quibusdam maiores sit, quas illum minima. Repudiandae, voluptatum
              reprehenderit ipsum quaerat inventore quasi libero eius dolores
              soluta iusto impedit, delectus veniam aut doloribus numquam
              similique animi deleniti. Consequuntur distinctio temporibus
              reprehenderit minus ipsam molestias quae ad modi deleniti vero
              nemo cupiditate, iusto id magnam. Adipisci nostrum reiciendis
              obcaecati alias veritatis amet repellat, similique fuga deserunt
              maxime, nemo cumque nulla ut deleniti perferendis sapiente. Ab
              suscipit, iusto eligendi illum tempore debitis natus laboriosam.
              Laudantium veritatis recusandae aperiam animi nihil excepturi
              necessitatibus labore vitae provident, a nesciunt doloribus sint
              voluptas suscipit facere quia eligendi eveniet illo voluptatibus
              velit laborum veniam nemo accusamus. Natus, dolor magnam. Non,
              quae dignissimos! Ad eligendi autem voluptatem eveniet modi magnam
              praesentium, maxime id, tenetur aliquam voluptate, error et
              quaerat. Error, nihil beatae, unde sed nobis iusto illo
              consequatur modi perspiciatis nemo temporibus corporis adipisci
              porro veritatis eligendi expedita! Nulla explicabo beatae
              excepturi fuga, fugit consequuntur laboriosam atque facilis
              molestias mollitia a, dolores voluptates vel distinctio laborum in
              nostrum porro deleniti accusantium corrupti tempore! Qui aliquid
              exercitationem atque ad sunt expedita esse nemo, amet consectetur
              laudantium eligendi tempora vel veritatis ex dicta, a doloribus
              tempore. Inventore voluptatem delectus ad quae eum temporibus
              consectetur doloremque eos animi sit est nihil dolor eaque illo
              necessitatibus iusto laboriosam, quisquam unde mollitia nisi
              dolores veniam! Quo minima earum non explicabo perferendis quasi
              assumenda corporis ipsum provident, quam tempore ad reprehenderit
              incidunt nisi cum? Consequatur, vero eum? Hic recusandae suscipit
              iusto exercitationem praesentium earum quia. Doloremque incidunt
              atque odio quo accusantium iure! Illo maxime quae, dolor quasi,
              facilis quis rem adipisci labore quo nisi corrupti ut. Ducimus ab
              eveniet enim atque non, esse velit tempore qui repudiandae, quod,
              earum est magnam. Rerum optio, vero magni laborum provident quas
              placeat impedit, dolorum vel quod nobis beatae aspernatur ipsa
              sint, unde cupiditate quis natus sunt sapiente laboriosam harum
              aliquam. Repellendus in ea nobis consequatur fugiat totam quos
              reprehenderit, eum ut vitae neque sapiente itaque quibusdam sit
              doloribus deserunt at, doloremque porro eveniet suscipit officiis
              blanditiis, ipsa maiores. Dignissimos amet laboriosam dolor
              pariatur nesciunt voluptatem cupiditate facere eos vel tempora?
              Sint exercitationem dolorem maiores? Nihil placeat quis vitae non
              illo molestias ad nemo perspiciatis illum aperiam omnis, possimus
              quam at autem accusamus sit quos. A magni adipisci sit perferendis
              quod voluptate repellendus itaque! Sit quos corrupti deleniti
              possimus corporis, enim nisi quasi iure iste laborum aperiam animi
              sequi ipsum. Necessitatibus quibusdam illum possimus reiciendis
              reprehenderit nulla repellendus deserunt dolore repellat dolores.
            </p>
          </>
        }
        onClose={closeDrawer}
      />
    </div>
  );
}

export default App;
