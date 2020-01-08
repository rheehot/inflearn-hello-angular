package me.ricky.demospringmvc;

import lombok.*;
import org.apache.tomcat.jni.Local;

import java.time.LocalDateTime;
import java.util.prefs.Preferences;

@Getter @Setter
@Builder @NoArgsConstructor @AllArgsConstructor
public class Event {
    private String name;

    private int limitOfEnrollment;

    private LocalDateTime startDateTime;

    private LocalDateTime endDateTime;

}
