// import "./CreateAction.css";
// import Card from "../components/Card";
// import HeaderActionGoForward from "../components/Card_components/HeaderActionGoForward";
// import FooterSubmit from "../components/Card_components/FooterSubmit";
// import SpeechInput from "../components/SpeechInput";
// import { useState, useEffect } from "react";
// import { useParams, useHistory } from "react-router";

// export default function CreateCase() {
//   /** VARIABLE SET UP */
//   const reminderObj = JSON.parse(localStorage.getItem("newEntry"));
//   const { number } = useParams();
//   const indexNumber = Number(number);
//   const history = useHistory();
//   const [verbInput, setVerbInput] = useState(
//     reminderObj.tasks[indexNumber - 1].verb
//   );
//   const [actionInput, setActionInput] = useState(
//     reminderObj.tasks[indexNumber - 1].action
//   );
//   const [withInput, setWithInput] = useState(
//     reminderObj.tasks[indexNumber - 1].with
//   );
//   const [isTooShort, setIsTooShort] = useState(true);
//   const [disable, setDisable] = useState(false);

//   /** ==============================  Speech To Text */
//   let supportsSpeech, SpeechRecognition, recognition;

//   if (!window.webkitSpeechRecognition) {
//     supportsSpeech = false;
//   } else {
//     supportsSpeech = true;
//     SpeechRecognition = window.webkitSpeechRecognition;
//     recognition = new SpeechRecognition();
//   }

//   function onSpeechInput(event) {
//     event.preventDefault();
//     const buttonTarget = event.target.id;
//     recognition.start();

//     recognition.onstart = () => {
//       setDisable(true);
//     };

//     recognition.onresult = (event) => {
//       const current = event.resultIndex;
//       const transcript = event.results[current][0].transcript;

//       if (buttonTarget.toLowerCase() === "verb") {
//         setVerbInput(transcript.slice(0, -1));
//       } else if (buttonTarget.toLowerCase() === "action") {
//         setActionInput(transcript.slice(0, -1));
//       } else {
//         setWithInput(transcript.slice(0, -1));
//       }
//     };
//     recognition.onend = () => {
//       setDisable(false);
//     };
//   }

//   /** CHECK FOR INPUT */
//   useEffect(() => {
//     setIsTooShort(verbInput.length === 0 || actionInput.length === 0);
//   }, [verbInput, actionInput]);

//   /** ONCLICK ADD NEW TASK */
//   function caseAddGoForward() {
//     if (isTooShort) {
//       return;
//     }

//     const taskObj = {
//       taskId: indexNumber,
//       verb: verbInput,
//       action: actionInput,
//       with: withInput,
//     };

//     reminderObj.tasks[indexNumber - 1] = taskObj;
//     reminderObj.tasks.push({
//       taskId: indexNumber + 1,
//       verb: "",
//       action: "",
//       with: "",
//     });

//     localStorage.removeItem("newEntry");
//     localStorage.setItem("newEntry", JSON.stringify(reminderObj));
//     setVerbInput("");
//     setActionInput("");
//     setWithInput("");

//     history.push(`/create/${indexNumber + 1}`);
//   }

//   /** ONCLICK GO BACK  */
//   function actionHandleGoBack() {
//     if (indexNumber > 1) {
//       setVerbInput(reminderObj.tasks[indexNumber - 2].verb);
//       setActionInput(reminderObj.tasks[indexNumber - 2].action);
//       setWithInput(reminderObj.tasks[indexNumber - 2].with);
//     }
//     history.push(`/create/${indexNumber - 1}`);
//   }
//   /** ONCLICK GO FORWARD  */
//   function goForward() {
//     setVerbInput(reminderObj.tasks[indexNumber].verb);
//     setActionInput(reminderObj.tasks[indexNumber].action);
//     setWithInput(reminderObj.tasks[indexNumber].with);

//     history.push(`/create/${indexNumber + 1}`);
//   }

//   function addReminder(event) {
//     event.preventDefault();

//     if (isTooShort) {
//       return;
//     }

//     const taskObj = {
//       taskId: indexNumber,
//       verb: verbInput,
//       action: actionInput,
//       with: withInput,
//     };

//     reminderObj.tasks[indexNumber - 1] = taskObj;

//     localStorage.removeItem("newEntry");
//     localStorage.setItem("reminder", JSON.stringify(reminderObj));
//     history.push("/");
//   }

//   return (
//     <main id="CreateAction" className="card-screen">
//       <Card
//         header={
//           <HeaderActionGoForward
//             onClickAddForward={caseAddGoForward}
//             onClickForward={goForward}
//             onClickBackward={actionHandleGoBack}
//             currentItem={indexNumber}
//             totalItems={reminderObj ? reminderObj.tasks.length : 2}
//           />
//         }
//         footer={
//           indexNumber === reminderObj.tasks.length ? (
//             <FooterSubmit onClick={addReminder} text="Add Reminder" />
//           ) : (
//             ""
//           )
//         }
//       >
//         <h2 className="margin-b--s">Do this</h2>
//         <form className="dispFlex margin-b--l">
//           <SpeechInput
//             disable={disable}
//             onChange={(event) => setVerbInput(event.target.value)}
//             label="Verb"
//             value={verbInput}
//             onMouseDown={onSpeechInput}
//             supportsSpeech={supportsSpeech}
//           />
//           <SpeechInput
//             disable={disable}
//             onChange={(event) => setActionInput(event.target.value)}
//             onMouseDown={onSpeechInput}
//             label="Action"
//             value={actionInput}
//             supportsSpeech={supportsSpeech}
//           />
//           <SpeechInput
//             disable={disable}
//             onChange={(event) => setWithInput(event.target.value)}
//             onMouseDown={onSpeechInput}
//             label="With"
//             value={withInput}
//             isRequired={false}
//             supportsSpeech={supportsSpeech}
//           />
//         </form>
//         {isTooShort && (
//           <p className="Card__message--error">
//             Required Input fields can't be empty
//           </p>
//         )}
//       </Card>
//     </main>
//   );
// }

// const history = useHistory();
// const reminderObj = JSON.parse(localStorage.getItem("newEntry")) || {
//   tasks: [],
// };

// const [triggerInput, setTriggerInput] = useState(
//   reminderObj.tasks.length === 0 ? "" : reminderObj.trigger
// );
// const [eventTriggerInput, setEventTriggerInput] = useState(
//   reminderObj.tasks.length === 0 ? "" : reminderObj.triggerEvent
// );

// const [isTooShort, setIsTooShort] = useState(true);
// const [disable, setDisable] = useState(false);
// /** ==============================  Speech To Text */
// let supportsSpeech, SpeechRecognition, recognition;

// if (!window.webkitSpeechRecognition) {
//   supportsSpeech = false;
// } else {
//   supportsSpeech = true;
//   SpeechRecognition = window.webkitSpeechRecognition;
//   recognition = new SpeechRecognition();
// }

// function onSpeechInput(event) {
//   event.preventDefault();
//   const buttonTarget = event.target.id;
//   recognition.start();

//   recognition.onstart = () => {
//     setDisable(true);
//   };
//   recognition.onresult = (event) => {
//     const current = event.resultIndex;
//     const transcript = event.results[current][0].transcript;

//     if (buttonTarget.toLowerCase() === "trigger") {
//       setTriggerInput(transcript.slice(0, -1));
//     } else {
//       setEventTriggerInput(transcript.slice(0, -1));
//     }
//   };

//   recognition.onend = () => {
//     setDisable(false);
//   };
// }

// /** INPUT VALIDATION */
// useEffect(() => {
//   setIsTooShort(triggerInput.length === 0 || eventTriggerInput.length === 0);
// }, [triggerInput, eventTriggerInput]);

// /** GO BACK FUNCTION */
// function caseHandleGoBack() {
//   localStorage.removeItem("newEntry");
//   history.push("/");
// }
// /** CYCLE FORWARD */
// function caseHandleGoForward() {
//   if (reminderObj.tasks.length > 0) {
//     history.push("/create/1");
//   } else {
//     if (isTooShort) {
//       return;
//     } else {
//       const obj = {
//         reminderId: uuidv4(),
//         trigger: triggerInput,
//         triggerEvent: eventTriggerInput,
//         creationTime: Date.now(),
//         tasks: [
//           {
//             taskId: 1,
//             verb: "",
//             action: "",
//             with: "",
//           },
//         ],
//       };

//       localStorage.setItem("newEntry", JSON.stringify(obj));

//       history.push("/create/1");
//     }
//   }
// }

// // return (
// //   <main id="CreateCase" className="card-screen">
// //     <Card
// //       header={
// //         <HeaderCreateCaseGoForward
// //           onClickBackward={caseHandleGoBack}
// //           onClickForward={caseHandleGoForward}
// //           currentItem={0}
// //           totalItems={
// //             reminderObj.tasks.length > 0 ? reminderObj.tasks.length : 1
// //           }
// //         />
// //       }
// //     >
// //       <h2 className="margin-b--s">
// //         In case <br /> of
// //       </h2>
// //       <form
// //         onSubmit={(event) => event.preventDefault()}
// //         id="createForm"
// //         className="dispFlex margin-b--l"
// //       >
// //         <SpeechInput
// //           disable={disable}
// //           onChange={(event) => {
// //             setTriggerInput(event.target.value);
// //           }}
// //           onMouseDown={onSpeechInput}
// //           value={triggerInput}
// //           label="Trigger"
// //           supportsSpeech={supportsSpeech}
// //         />
// //         <SpeechInput
// //           disable={disable}
// //           onChange={(event) => {
// //             setEventTriggerInput(event.target.value);
// //           }}
// //           onMouseDown={onSpeechInput}
// //           value={eventTriggerInput}
// //           label="Event"
// //           supportsSpeech={supportsSpeech}
// //         />
// //       </form>

// //       {isTooShort && (
// //         <p className="Card__message--error">The Input fields can't be empty</p>
// //       )}
// //     </Card>
// //   </main>
// // );
