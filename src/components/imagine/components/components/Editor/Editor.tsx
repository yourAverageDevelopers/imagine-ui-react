// import React, { Component } from 'react';

// /**
//  * Component representing an editor for writing blogs
//  */
// export class Editor extends Component {
//   private editor: HTMLIFrameElement;
//   private ref;

//   constructor(props) {
//     super(props);
//     this.ref = React.createRef();
//   }

//   private edit = command => {
//     this.editor.contentWindow.document.execCommand(command, false, null);
//     this.ref.current.focus();
//   };

//   private apply = (command, value) => {
//     this.editor.contentWindow.document.execCommand(command, false, value);
//     this.ref.current.focus();
//   };

//   private getContent = (): string => {
//     return this.editor.contentWindow.document.body.innerHTML;
//   };

//   private setContent = (content: string) => {
//     this.editor.contentWindow.document.body.insertAdjacentHTML('afterbegin', content);
//   };

//   public componentDidMount() {
//     this.editor = this.ref.current;
//     this.editor.addEventListener('load', () => {
//       this.editor.contentWindow.document.designMode = 'on';
//     });
//   }

//   public render() {
//     return (
//       <div className='ui editor'>
//         <div className='controls'>
//           <button
//             className='control'
//             onClick={() => {
//               this.edit('bold');
//             }}
//           >
//             Bold
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('italic');
//             }}
//           >
//             <i className='fa fa-italic' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('underline');
//             }}
//           >
//             <i className='fa fa-underline' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('strikethrough');
//             }}
//           >
//             <i className='fa fa-strikethrough' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('justifyLeft');
//             }}
//           >
//             <i className='fa fa-align-left' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('justifyCenter');
//             }}
//           >
//             <i className='fa fa-align-center' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('justifyFull');
//             }}
//           >
//             <i className='fa fa-align-justify' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('cut');
//             }}
//           >
//             <i className='fa fa-cut' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('copy');
//             }}
//           >
//             <i className='fa fa-copy' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('indent');
//             }}
//           >
//             <i className='fa fa-indent' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('outdent');
//             }}
//           >
//             <i className='fa fa-outdent' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('subscript');
//             }}
//           >
//             <i className='fa fa-subscript' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('superscript');
//             }}
//           >
//             <i className='fa fa-superscript' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('undo');
//             }}
//           >
//             <i className='fa fa-undo' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('redo');
//             }}
//           >
//             <i className='fa fa-redo' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('insertUnorderedList');
//             }}
//           >
//             <i className='fa fa-list-ul' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('insertOrderedList');
//             }}
//           >
//             <i className='fa fa-list-ol' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('insertParagraph');
//             }}
//           >
//             <i className='fa fa-paragraph' />
//           </button>

//           <div className='control'>
//             <select
//               onChange={event => {
//                 this.apply('formatBlock', event.target.value);
//               }}
//             >
//               <option value='H1'>H1</option>
//               <option value='H2'>H2</option>
//               <option value='H3'>H3</option>
//               <option value='H4'>H4</option>
//               <option value='H5'>H5</option>
//               <option value='H6'>H6</option>
//             </select>
//           </div>
//           <br />

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('insertHorizontalRule');
//             }}
//           >
//             insert Horizontal Rule
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('createLink');
//             }}
//           >
//             <i className='fa fa-link' />
//           </button>

//           <button
//             className='control'
//             onClick={() => {
//               this.edit('unlink');
//             }}
//           >
//             <i className='fa fa-unlink' />
//           </button>

//           <div className='control'>
//             <select
//               onChange={event => {
//                 this.apply('fontName', event.target.value);
//               }}
//             >
//               <option value='Arial'>Arial</option>
//               <option value='Comic Sans MS'>Comic Sans MS</option>
//               <option value='Courier'>Courier</option>
//               <option value='Georgia'>Georgia</option>
//               <option value='Tahoma'>Tahoma</option>
//               <option value='Times New Roman'>Times New Roman</option>
//               <option value='Verdana'>Verdana</option>
//             </select>
//           </div>
//           <div className='control'>
//             <select
//               onChange={event => {
//                 this.apply('fontSize', event.target.value);
//               }}
//             >
//               <option value='1'>1</option>
//               <option value='2'>2</option>
//               <option value='3'>3</option>
//               <option value='4'>4</option>
//               <option value='5'>5</option>
//               <option value='6'>6</option>
//               <option value='7'>7</option>
//             </select>
//           </div>
//           <div className='control'>
//             Font Color
//             <input
//               type='color'
//               onChange={event => {
//                 this.apply('foreColor', event.target.value);
//               }}
//             />
//             Highlight
//             <input
//               type='color'
//               onChange={event => {
//                 this.apply('hiliteColor', event.target.value);
//               }}
//             />
//           </div>
//         </div>
//         <iframe ref={this.ref} className='content' />
//       </div>
//     );
//   }
// }

export {};
