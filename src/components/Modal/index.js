import React, { forwardRef, useImperativeHandle, useState } from 'react';
import './index.scss';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false)

    useImperativeHandle(ref, () => {
        return {
            open: () => setOpen(true),
            close: () => setOpen(false)
        }
    })

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        className="modal-backdrop"
                        onClick={() => setOpen(false)}
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.3
                            }
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                delay: 0.3
                            }
                        }}
                    />
                    <motion.div
                        className="modal-content-wrapper"
                        initial={{
                            scale: 0
                        }}
                        animate={{
                            scale: 1,
                            transition: {
                                duration: 0.3
                            }
                        }}
                        exit={{
                            scale: 0,
                            transition: {
                                delay: 0.3
                            }
                        }}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{
                                x: 100,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    delay: 0.3,
                                    duration: 1
                                }
                            }}
                            exit={{
                                x: 100,
                                opacity: 0,
                                transition: {
                                    duration: 0.3
                                }
                            }}
                        >
                            {props.children}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
});

export default Modal;