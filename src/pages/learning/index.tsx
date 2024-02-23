import { useState, useEffect } from "react";
import { Nabvar } from "../../components/navbar";
import { Topnav } from "../../components/navbar/topnav";
import ig from "./ig.json"
import styles from "./index.module.css";
import { getIGs, getDistricts } from "./api";
import Modal from "./components/Modal";
import { useNavigate } from "react-router-dom";

type Props = {};
interface Option {
  id: string;
  name: string;
}

const interestGroups = ig.response.interestGroup.map((interestGroup) => {
  return { id: interestGroup.id, name: interestGroup.name }
})

export const Learning = (_props: Props) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [options, setOptions] = useState<Option[]>([])
  const [selectedIg, setSelectedIg] = useState<Option>();
  const [selectedOption, setSelectedOption] = useState<string>('');

  const openModal = (ig: Option) => {
    setSelectedIg(ig);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    handleSubmit()
    setIsModalOpen(false);

  }
  const handleSubmit = async () => {

    const Igs = await getIGs(selectedIg?.id || "", selectedOption);
    console.log(Igs)
    navigate(`/ig`, { state: { Igs: Igs, selectedIg: selectedIg } });
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const tempOptions: Option[] = await getDistricts();
      console.log(tempOptions)
      setOptions(tempOptions);
    };

    fetchData();

    return () => {
      // Cleanup logic here if needed
    };
  }, []);



  return (
    <div className={styles.Wrapper}>
      <Topnav />
      <h1>
        Interest <span className="colorText">Groups</span>
      </h1>
      <div>

      </div>
      <div>
        {interestGroups.map((ig) => {
          return (
            <button className={styles.buttonStyle} key={ig.id} onClick={() => openModal(ig)}>
              {ig.name}
            </button>
          )
        })}
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          {selectedIg?.name}
          <div className={styles.modalSelect}>
            <label htmlFor="district">Choose your District:</label>

            <select name="district" id="district" value={selectedOption} onChange={handleChange}>
              {options.map((option: Option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>

              ))}
            </select>
          </div>
        </Modal>
      </div>
      <Nabvar />
    </div>
  );
};
